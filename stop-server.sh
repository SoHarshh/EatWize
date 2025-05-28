#!/bin/bash

# EatWize Development Server Stopper
echo "🛑 EatWize Server Stopper"
echo "========================="

PORT=3000

# Check if server is running
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    PID=$(lsof -ti:$PORT)
    echo "🔍 Found server running on port $PORT (PID: $PID)"
    echo "🔄 Stopping server..."
    
    kill -9 $PID
    
    # Wait a moment and check if it's stopped
    sleep 1
    
    if ! lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
        echo "✅ Server stopped successfully!"
    else
        echo "❌ Failed to stop server. You may need to stop it manually."
    fi
else
    echo "ℹ️  No server running on port $PORT"
fi 