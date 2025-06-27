#!/bin/bash

# Deployment script for Dr. Sarra ISMAIL's Dentist Website
echo "🦷 Deploying Dr. Sarra ISMAIL's Dentist Website..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files are ready in the 'out' directory"
    echo ""
    echo "🚀 Next steps:"
    echo "1. Push your code to GitHub"
    echo "2. Enable GitHub Pages in repository settings"
    echo "3. Your website will be live at: https://YOUR_USERNAME.github.io/REPOSITORY_NAME/"
    echo ""
    echo "📋 Files ready for deployment:"
    ls -la out/
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
