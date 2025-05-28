#!/bin/bash

# EatWize Development Server Manager
echo "🌐 EatWize Development Server"
echo "============================="

PORT=3000

# Function to check if port is in use
check_port() {
    if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
        echo "⚠️  Port $PORT is already in use"
        
        # Get the process ID
        PID=$(lsof -ti:$PORT)
        echo "📍 Process ID: $PID"
        
        # Ask user if they want to kill the existing process
        read -p "❓ Kill existing process and start new server? (y/n): " -n 1 -r
        echo
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo "🔄 Killing existing process..."
            kill -9 $PID
            sleep 1
        else
            echo "❌ Server not started. Use a different port or kill the existing process manually."
            exit 1
        fi
    fi
}

# Function to start server
start_server() {
    echo "🚀 Starting development server on port $PORT..."
    echo "📱 Open your browser and go to: http://localhost:$PORT"
    echo "🛑 Press Ctrl+C to stop the server"
    echo ""
    
    # Start the server
    python3 -m http.server $PORT
}

# Main execution
check_port
start_server 