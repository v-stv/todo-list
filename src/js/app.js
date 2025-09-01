import { loadFromLocalStorage } from './storage.js';
import { todoElement, searchField, todoAddBtn, todoDeleteAllBtn, renderTasks, countingTotalTasks } from './dom.js';
import { setupSearchEventsHandler, setupTaskEventsHandler, setupUIEventsHandler } from './events.js';

let tasks = loadFromLocalStorage();

renderTasks(tasks);
countingTotalTasks(tasks);

setupSearchEventsHandler(searchField, tasks);
setupTaskEventsHandler(todoAddBtn, todoDeleteAllBtn, tasks);
setupUIEventsHandler(todoElement, tasks);