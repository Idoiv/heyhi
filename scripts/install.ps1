# Define the base directory
$baseDir = "C:\Users\t-idoivry\OneDrive - Microsoft\Documents\Private\heyhi\heyhi-life"

# Install server dependencies
Write-Output "Installing server dependencies..."
cd "$baseDir\server"
npm install

# Initialize npm in the client directory if not already done
if (-Not (Test-Path "$baseDir\client\package.json")) {
    Write-Output "Initializing npm in the client directory..."
    cd "$baseDir\client"
    npm init -y
}

# Ensure React and necessary dependencies are listed in package.json
$reactDependencies = @"
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "5.0.0"
  }
}
"@

if (-Not (Test-Path "$baseDir\client\package.json")) {
    Set-Content -Path "$baseDir\client\package.json" -Value $reactDependencies
} else {
    $packageJson = Get-Content -Path "$baseDir\client\package.json" | Out-String | ConvertFrom-Json
    if (-Not $packageJson.dependencies.react) {
        $packageJson.dependencies.react = "^18.0.0"
    }
    if (-Not $packageJson.dependencies["react-dom"]) {
        $packageJson.dependencies["react-dom"] = "^18.0.0"
    }
    if (-Not $packageJson.dependencies["react-scripts"]) {
        $packageJson.dependencies["react-scripts"] = "5.0.0"
    }
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content -Path "$baseDir\client\package.json"
}

# Install client dependencies
Write-Output "Installing client dependencies..."
cd "$baseDir\client"
npm install

# Build the React application
Write-Output "Building the React application..."
npm run build

# Return to the base directory
cd $baseDir

Write-Output "All dependencies installed and the application is built."
