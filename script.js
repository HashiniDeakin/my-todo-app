// Enhanced To-Do List Application
let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a valid task!");
        return;
    }

    // Add task to our array
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

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
    saveTasksToStorage();
}

function toggleTaskCompletion(id) {
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
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

function loadTasksFromStorage() {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadTasksFromStorage();
});

// Export for testing (important for our Jenkins pipeline!)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addTask, deleteTask, toggleTaskCompletion, tasks };
}
