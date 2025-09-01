import { renderTasks, countingTotalTasks } from './dom.js';
import { saveToLocalStorage } from './storage.js';


export function setupSearchEventsHandler(searchField, tasks) {
    searchField.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    searchField.addEventListener('input', () => {
        const textInput = document.querySelector('#search-task').value.toLowerCase();
        const searchTasks = tasks.filter((task) => {
            const words = task.title.toLowerCase().split(' ');
            return words.some(word => word.startsWith(textInput));
        });
        renderTasks(searchTasks);
        countingTotalTasks(searchTasks);
    });
}

export function setupTaskEventsHandler(todoAddBtn, todoDeleteAllBtn, tasks) {
    todoAddBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let textInput = document.querySelector('.field__input');
        if (textInput.value.trim() === '') return;

        tasks.push({
            id: Date.now(),
            title: textInput.value,
            completed: false
        });

        textInput.value = '';
        saveToLocalStorage(tasks);
        renderTasks(tasks);
        countingTotalTasks(tasks);
    });

    todoDeleteAllBtn.addEventListener('click', () => {
        tasks.length = 0;
        saveToLocalStorage(tasks);
        renderTasks(tasks);
        countingTotalTasks(tasks);
    });
}

export function setupUIEventsHandler(todoListElement, tasks) {
    todoListElement.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.todo-item__delete-button')) {
            const parentElement = target.closest('.todo__tasks-item');
            const idOfElement = Number(parentElement.dataset.id);
            const indexOfTask = tasks.findIndex(task => task.id === idOfElement);
            if (indexOfTask !== -1) {
                tasks.splice(indexOfTask, 1);
            }
        }

        if (target.classList.contains('field__label')) {
            const checkBox = target.previousElementSibling;
            const idOfElement = Number(checkBox.id);
            const task = tasks.find(task => task.id === idOfElement);
            if (task) {
                task.completed = !task.completed;
            }
        }

        if (target.classList.contains('todo-item__checkbox')) {
            const idOfElement = Number(target.id);
            const task = tasks.find(task => task.id === idOfElement);
            if (task) {
                task.completed = target.checked;
            }
        }

        saveToLocalStorage(tasks);
        renderTasks(tasks);
        countingTotalTasks(tasks);
    });
}