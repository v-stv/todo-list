export const todoElement = document.querySelector('.todo__tasks-list');
export const searchField = document.getElementById('search-form');
export const todoAddBtn = document.querySelector('.todo__button');
export const todoDeleteAllBtn = document.querySelector('.todo__delete-all-button');
export const counterElement = document.querySelector('.counter');

export function renderTasks(tasks) {
    todoElement.innerHTML = tasks
        .map(({id, title, completed}) => `
        <li class="todo__tasks-item" data-id="${id}" >
            <input class="todo-item__checkbox" type="checkbox" id="${id}"
                ${completed ? 'checked' : ''}>
            <label class="field__label ${completed ? 'todo-item--completed' : ''}" for="${id}">
                ${title}
            </label>
            <button class="todo-item__delete-button" type="button" aria-label="Delete" title="Delete">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </li>
        `).join('');
}

export function countingTotalTasks(tasks) {
    counterElement.innerHTML = tasks.length;
}