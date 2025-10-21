# Quick Start Guide

## Running the Development Server

### Method 1: Using the Batch File (Easiest)
Double-click `start-dev.bat` in the `apex2` folder

OR from terminal in `C:\dev\apex2`:
```bash
.\start-dev.bat
```

### Method 2: Manual Commands
```bash
cd C:\dev\apex2\apex-website
npm run dev
```

## Accessing the Site

Once the server starts (takes 10-20 seconds), open your browser to:
```
http://localhost:3003
```

## Important: You MUST be in the apex-website directory!

❌ **WRONG**: `C:\dev\apex2>` npm run dev
✅ **CORRECT**: `C:\dev\apex2\apex-website>` npm run dev

## Stopping the Server

Press `Ctrl + C` in the terminal where the server is running

## Troubleshooting

**If you see "ERR_CONNECTION_REFUSED":**
1. Check that the server is actually running (look for "Ready" message in terminal)
2. Wait 10-20 seconds after starting
3. Make sure you're accessing http://localhost:3003 (not 3000)

**If you see "Cannot find package.json":**
- You're in the wrong directory
- Run: `cd C:\dev\apex2\apex-website`
- Then: `npm run dev`

**If port 3003 is already in use:**
```bash
# Kill the process on port 3003
npx kill-port 3003

# Then start again
npm run dev
```

## Other Useful Commands

```bash
# Build for production
npm run build

# Run production build
npm start

# Check for linting errors
npm run lint
```

## Project Location
```
C:\dev\apex2\apex-website\
```

## Quick Tips

- The server runs on port **3003** (not 3000)
- Auto-refreshes when you save files
- Hot reloading enabled
- Check terminal for any errors

---

**Need help?** Check README.md or DEPLOYMENT.md in the apex-website folder

