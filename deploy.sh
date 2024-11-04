#!/bin/bash
echo "hello"
# Navigate to your application directory
cd ./seyon-academy

# Pull the latest changes
git pull origin main

# Install dependencies and build your application
npm install
npm run build

# Restart your application (e.g., using PM2)
pm2 restart seyon

echo "complete"
