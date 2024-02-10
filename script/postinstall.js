import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Determine the root directory of the package
const packageRoot = process.cwd();

// Check if the package is being installed in a React Native project
const reactNativePackageJsonPath = path.resolve(
  packageRoot,
  'node_modules/react-native/package.json',
);

if (fs.existsSync(reactNativePackageJsonPath)) {
  // If 'react-native' package exists, assume it's a React Native project and execute 'pod install'
  console.log('Running pod install...');
  try {
    execSync('cd ios && pod install', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error executing pod install:', error);
    process.exit(1); // Exit with error code if pod install fails
  }
}
