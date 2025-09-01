export function loadFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');

    return storedTasks ? JSON.parse(storedTasks) : []
}

export function saveToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}