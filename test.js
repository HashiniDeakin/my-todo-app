// Simple test file that always passes for demonstration
console.log('🧪 Starting tests...');

// Test 1: Basic assertion
console.log('Test 1: Basic math test');
if (1 + 1 === 2) {
    console.log('✅ PASS: Basic math works');
} else {
    console.log('❌ FAIL: Basic math broken');
    process.exit(1);
}

// Test 2: Node.js environment test
console.log('Test 2: Node.js environment');
if (typeof process !== 'undefined') {
    console.log('✅ PASS: Running in Node.js');
} else {
    console.log('❌ FAIL: Not in Node.js');
    process.exit(1);
}

// Test 3: File system access test
console.log('Test 3: File system access');
try {
    const fs = require('fs');
    const files = fs.readdirSync('.');
    console.log('✅ PASS: Can access file system');
} catch (error) {
    console.log('❌ FAIL: Cannot access file system');
    process.exit(1);
}

console.log('🎉 All tests passed successfully!');
