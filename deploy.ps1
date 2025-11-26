# deploy.ps1
# PowerShell script to build and deploy Vite React app to GitHub Pages

# Step 1: Delete old dist folder
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "Deleted old dist/ folder."
}

# Step 2: Build the project
Write-Host "Building project..."
npm run build

# Step 3: Copy dist contents to temp folder
$deployFolder = "deploy-temp"
if (Test-Path $deployFolder) {
    Remove-Item -Recurse -Force $deployFolder
}
Copy-Item -Path "dist\*" -Destination $deployFolder -Recurse
Write-Host "Copied dist/ contents to $deployFolder."

# Step 4: Move to GitHub Pages repo root (optional: same repo)
# Uncomment the next line if you want to auto-copy to repo folder
# Copy-Item -Path "$deployFolder\*" -Destination "B:\GameProjects\website" -Recurse -Force

Write-Host "Deployment folder ready: $deployFolder"
Write-Host "Now, upload contents of $deployFolder to GitHub repo root via GitHub Desktop or git push."
