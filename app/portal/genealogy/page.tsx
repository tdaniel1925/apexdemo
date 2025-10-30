"use client";

import { useState, useEffect, useRef } from "react";
import { useMockData } from "@/lib/portal/mockDataService";
import type { Distributor } from "@/lib/portal/mockDataService";
import { DashboardLayout } from "@/components/portal/DashboardLayout";

interface TreeNode extends Distributor {
  left?: TreeNode;
  right?: TreeNode;
  level: number;
}

function buildBinaryTree(distributors: Distributor[]): TreeNode | null {
  if (distributors.length === 0) return null;

  // Find root (distributor with no sponsor)
  const root = distributors.find(d => d.sponsorId === null);
  if (!root) return null;

  const nodeMap = new Map<string, TreeNode>();
  
  // Initialize all nodes
  distributors.forEach(d => {
    nodeMap.set(d.id, { ...d, level: 0 });
  });

  // Build tree structure
  distributors.forEach(d => {
    if (d.sponsorId && d.placement) {
      const parent = nodeMap.get(d.sponsorId);
      const child = nodeMap.get(d.id);
      
      if (parent && child) {
        child.level = parent.level + 1;
        if (d.placement === "left") {
          parent.left = child;
        } else {
          parent.right = child;
        }
      }
    }
  });

  return nodeMap.get(root.id) || null;
}

interface TreeNodeComponentProps {
  node: TreeNode;
  onNodeClick: (node: TreeNode) => void;
  selectedNode: TreeNode | null;
}

function TreeNodeComponent({ node, onNodeClick, selectedNode }: TreeNodeComponentProps) {
  const isSelected = selectedNode?.id === node.id;
  
  const statusColors = {
    active: "bg-green-500",
    inactive: "bg-gray-400",
    pending: "bg-yellow-500"
  };

  return (
    <div className="flex flex-col items-center min-w-max">
      {/* Node Card */}
      <div
        onClick={() => onNodeClick(node)}
        className={`relative bg-white rounded-lg shadow-md p-3 cursor-pointer transition-all hover:shadow-lg ${
          isSelected ? "ring-4 ring-[#C41E3A]" : ""
        } w-40`}
      >
        {/* Status Indicator */}
        <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${statusColors[node.activeStatus]}`} />
        
        {/* Node Content */}
        <div className="text-center">
          <p className="text-sm font-bold text-gray-900 truncate">{node.displayName}</p>
          <p className="text-xs text-gray-500 truncate">{node.id}</p>
          
          {node.isMGA && (
            <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded mt-1">
              MGA
            </span>
          )}
          
          <div className="mt-2 pt-2 border-t border-gray-200">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">PV:</span>
              <span className="font-semibold">${(node.personalVolume / 1000).toFixed(0)}K</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Rank:</span>
              <span className="font-semibold truncate">{node.rank.split(" ")[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Children Container */}
      {(node.left || node.right) && (
        <div className="flex flex-col items-center mt-6">
          {/* Vertical Line */}
          <div className="w-0.5 h-8 bg-gray-300" />
          
          {/* Horizontal Line Container */}
          <div className="flex items-start">
            {/* Left Branch */}
            {node.left ? (
              <div className="flex flex-col items-center mr-8">
                <div className="w-0.5 h-8 bg-gray-300" />
                <TreeNodeComponent 
                  node={node.left} 
                  onNodeClick={onNodeClick}
                  selectedNode={selectedNode}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center mr-8">
                <div className="w-0.5 h-8 bg-gray-200" />
                <div className="w-40 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                  <span className="text-xs">Empty</span>
                </div>
              </div>
            )}

            {/* Right Branch */}
            {node.right ? (
              <div className="flex flex-col items-center ml-8">
                <div className="w-0.5 h-8 bg-gray-300" />
                <TreeNodeComponent 
                  node={node.right} 
                  onNodeClick={onNodeClick}
                  selectedNode={selectedNode}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center ml-8">
                <div className="w-0.5 h-8 bg-gray-200" />
                <div className="w-40 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                  <span className="text-xs">Empty</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function GenealogyPage() {
  const { currentUser, allDistributors } = useMockData();
  const [binaryTree, setBinaryTree] = useState<TreeNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [viewMode, setViewMode] = useState<"tree" | "list">("tree");
  const [searchQuery, setSearchQuery] = useState("");
  const [scale, setScale] = useState(1);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Build tree with current user as root
    const userDownline = allDistributors.filter(d => 
      d.id === currentUser.id || d.sponsorId !== null
    ).slice(0, 31); // Limit to prevent rendering issues
    
    const tree = buildBinaryTree(userDownline);
    setBinaryTree(tree);
    if (tree) setSelectedNode(tree);
  }, [currentUser, allDistributors]);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));
  const handleResetZoom = () => setScale(1);

  const handleNodeClick = (node: TreeNode) => {
    setSelectedNode(node);
  };

  if (!mounted) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="text-4xl mb-4">🌳</div>
            <p className="text-gray-500">Loading genealogy tree...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">🌳 Binary Tree Genealogy</h1>
              <p className="text-sm text-gray-600 mt-1">
                Visualize your organization structure and team performance
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("tree")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === "tree"
                    ? "bg-[#C41E3A] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Tree View
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === "list"
                    ? "bg-[#C41E3A] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                List View
              </button>
            </div>
          </div>

          {/* Search and Controls */}
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              />
            </div>

            {viewMode === "tree" && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleZoomOut}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                >
                  -
                </button>
                <span className="text-sm text-gray-600 min-w-16 text-center">
                  {(scale * 100).toFixed(0)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                >
                  +
                </button>
                <button
                  onClick={handleResetZoom}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tree/List View */}
          <div className="lg:col-span-3">
            {viewMode === "tree" ? (
              <div className="bg-white rounded-lg shadow p-6">
                <div
                  ref={containerRef}
                  className="overflow-auto"
                  style={{ maxHeight: "800px" }}
                >
                  <div
                    style={{
                      transform: `scale(${scale})`,
                      transformOrigin: "top center",
                      transition: "transform 0.2s"
                    }}
                    className="inline-block min-w-full py-8"
                  >
                    {binaryTree ? (
                      <TreeNodeComponent 
                        node={binaryTree} 
                        onNodeClick={handleNodeClick}
                        selectedNode={selectedNode}
                      />
                    ) : (
                      <div className="text-center py-12 text-gray-400">
                        <p>No tree data available</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Member
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rank
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          PV
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          GV
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {allDistributors.slice(0, 50).map((member) => (
                        <tr 
                          key={member.id}
                          onClick={() => setSelectedNode(member as TreeNode)}
                          className="hover:bg-gray-50 cursor-pointer"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {member.displayName}
                                </div>
                                <div className="text-sm text-gray-500">{member.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{member.rank}</div>
                            {member.isMGA && (
                              <span className="text-xs text-purple-600">MGA</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${member.personalVolume.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${member.groupVolume.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              member.activeStatus === "active" 
                                ? "bg-green-100 text-green-800"
                                : member.activeStatus === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}>
                              {member.activeStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Node Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                📋 Member Details
              </h3>

              {selectedNode ? (
                <div className="space-y-4">
                  <div className="text-center pb-4 border-b border-gray-200">
                    <p className="text-lg font-bold text-gray-900">{selectedNode.displayName}</p>
                    <p className="text-sm text-gray-500">{selectedNode.id}</p>
                    {selectedNode.isMGA && (
                      <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full mt-2">
                        MGA Status
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">Rank</p>
                      <p className="text-sm font-semibold text-gray-900">{selectedNode.rank}</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <span className={`text-sm font-semibold ${
                        selectedNode.activeStatus === "active" ? "text-green-600" :
                        selectedNode.activeStatus === "pending" ? "text-yellow-600" : "text-gray-600"
                      }`}>
                        {selectedNode.activeStatus.toUpperCase()}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Enrollment Date</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {new Date(selectedNode.enrollmentDate).toLocaleDateString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Personal Volume</p>
                      <p className="text-sm font-semibold text-gray-900">
                        ${selectedNode.personalVolume.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Group Volume</p>
                      <p className="text-sm font-semibold text-gray-900">
                        ${selectedNode.groupVolume.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Contract Status</p>
                      <p className="text-sm font-semibold text-gray-900 capitalize">
                        {selectedNode.contractStatus}
                      </p>
                    </div>

                    {selectedNode.firstPolicyPaidDate && (
                      <div>
                        <p className="text-xs text-gray-500">First Policy Paid</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {new Date(selectedNode.firstPolicyPaidDate).toLocaleDateString()}
                        </p>
                      </div>
                    )}

                    <div>
                      <p className="text-xs text-gray-500 mb-2">Annualized Carriers</p>
                      <div className="space-y-1">
                        {selectedNode.annualizedCarriers.map((carrier, idx) => (
                          <span 
                            key={idx}
                            className="block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                          >
                            {carrier}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {selectedNode.city}, {selectedNode.state}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <button className="w-full bg-[#C41E3A] text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                      Contact Member
                    </button>
                    <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                      View Full Profile
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-400 text-center py-8">
                  Select a member to view details
                </p>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
  );
}


