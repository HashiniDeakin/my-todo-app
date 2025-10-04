// Simple test file for our To-Do List application
const { addTask, deleteTask, tasks } = require('./script.js');

console.log('🧪 Starting tests...');

// Test 1: Initial tasks should be empty
console.log('Test 1: Initial tasks array should be empty');
if (tasks.length === 0) {
    console.log('✅ PASS: Tasks array is initially empty');
} else {
    console.log('❌ FAIL: Tasks array should be empty');
    process.exit(1);
}

// Test 2: Add a task
console.log('Test 2: Adding a task should increase tasks array');
const initialLength = tasks.length;
addTask('Test task from Jenkins');
if (tasks.length === initialLength + 1) {
    console.log('✅ PASS: Task was added successfully');
} else {
    console.log('❌ FAIL: Task was not added');
    process.exit(1);
}

// Test 3: Verify task content
console.log('Test 3: Added task should have correct text');
const addedTask = tasks[tasks.length - 1];
if (addedTask.text === 'Test task from Jenkins') {
    console.log('✅ PASS: Task text is correct');
} else {
    console.log('❌ FAIL: Task text is incorrect');
    process.exit(1);
}

// Test 4: Delete a task
console.log('Test 4: Deleting a task should decrease tasks array');
const taskIdToDelete = tasks[0].id;
const lengthBeforeDelete = tasks.length;
deleteTask(taskIdToDelete);
if (tasks.length === lengthBeforeDelete - 1) {
    console.log('✅ PASS: Task was deleted successfully');
} else {
    console.log('❌ FAIL: Task was not deleted');
    process.exit(1);
}

console.log('🎉 All tests passed successfully!');
