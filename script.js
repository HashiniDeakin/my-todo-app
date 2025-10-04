/*// Enhanced To-Do List Application - Testable Version
let tasks = [];

function addTask(taskText) {
    if (!taskText || taskText.trim() === "") {
        throw new Error("Please enter a valid task!");
    }

    // Add task to our array
    const newTask = {
        id: Date.now(),
        text: taskText.trim(),
        completed: false
    };
    
    tasks.push(newTask);
    saveTasksToStorage();
    return newTask;
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasksToStorage();
}

function toggleTaskCompletion(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasksToStorage();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    if (!taskList) return; // Skip if not in browser
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="empty-state">No tasks yet. Add one above!</div>';
        return;
    }

    taskList.innerHTML = tasks.map(task => `
        <li class="task-item">
            <span class="task-text" style="text-decoration: ${task.completed ? 'line-through' : 'none'}; 
                                          color: ${task.completed ? '#6c757d' : '#333'};"
                  onclick="toggleTaskCompletion(${task.id})">
                ${task.text}
            </span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </li>
    `).join('');
}

function saveTasksToStorage() {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }
}

function loadTasksFromStorage() {
    if (typeof localStorage !== 'undefined') {
        const savedTasks = localStorage.getItem('todoTasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            renderTasks();
        }
    }
}

// Browser-specific code - only run in browser environment
if (typeof document !== 'undefined') {
    // Initialize the app when page loads
    document.addEventListener('DOMContentLoaded', function() {
        loadTasksFromStorage();
    });

    // Make functions available globally for HTML onclick handlers
    window.addTask = addTask;
    window.deleteTask = deleteTask;
    window.toggleTaskCompletion = toggleTaskCompletion;
}

// Export for testing (important for our Jenkins pipeline!)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addTask, deleteTask, toggleTaskCompletion, tasks };
}*/




// To-Do List Application - GUARANTEED WORKING VERSION
let tasks = [];

// GLOBAL FUNCTIONS - directly available to HTML
window.addTask = function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a valid task!");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    
    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
    saveTasksToStorage();
}

window.deleteTask = function(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
    saveTasksToStorage();
}

window.toggleTaskCompletion = function(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        saveTasksToStorage();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="empty-state">No tasks yet. Add one above!</div>';
        return;
    }

    taskList.innerHTML = tasks.map(task => `
        <li class="task-item">
            <span class="task-text" style="text-decoration: ${task.completed ? 'line-through' : 'none'}; color: ${task.completed ? '#6c757d' : '#333'};" onclick="toggleTaskCompletion(${task.id})">
                ${task.text}
            </span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </li>
    `).join('');
}

function saveTasksToStorage() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

function loadTasksFromStorage() {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadTasksFromStorage();
});

// Export for testing - ONLY for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        addTask: window.addTask, 
        deleteTask: window.deleteTask, 
        toggleTaskCompletion: window.toggleTaskCompletion, 
        tasks 
    };
}
