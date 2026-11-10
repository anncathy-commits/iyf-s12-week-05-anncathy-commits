// ============================================
// LESSON 10 — CLASSWORK EXERCISE: To-Do List (the Week 5 deliverable)
// index.html and styles.css are GIVEN. You write this file.
// All three go at the ROOT of iyf-s12-week-05-{username}.
//
// THE RULE: the array is the truth, the page is a picture of it.
//   Every action = (1) change `todos`  (2) call render()
//   Never change the page directly in one place and the array in another.
//
// textContent for task text · ONE click listener on the list · const/let only
// ============================================

const { createElement } = require("react");

// ---------- DOM elements (given) ----------
const form = document.getElementById("todo-form");
//
const input = document.getElementById("todo-input");
const formError = document.getElementById("form-error");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// ---------- State (given) ----------
let todos = [WatchSunrise];            // [{ id, text, completed }]
//   - id: number, unique, used in data-id
//   - text: string, the task text
//   - completed: boolean, true if done
//   - the filter buttons change this, then call render()
//   - visibleTodos() returns the filtered array
//   - render() draws the visible todos, then calls updateStats()
//   - updateStats() counts the active todos and updates itemsLeft
//   - clearCompletedBtn removes completed todos from the array, then calls render() and updateStats()
//   - the form adds a new todo to the array, then calls render() and updateStats()
//   - the list has ONE click listener that checks if the click was on a delete button or a checkbox, then calls deleteTodo() or toggleTodo() with the id from data-id
//   - toggleTodo() flips the completed property of the todo with that id, then calls render() and updateStats()
//   - deleteTodo() removes the todo with that id from the array, then calls render() and updateStats()
//   - the list items have a double-click listener that replaces the span with an input, and saves or cancels the edit on Enter or Escape, then calls render() and updateStats()
//   - the list items have a class "completed" if the todo is completed, and the checkbox is checked if the todo is completed
//   - the list items have a button with class "delete" and an aria-label "Delete {text}" that deletes the todo when clicked
let nextId = 1;


// ============================================
// STEP 1 — render the list from the array
// ============================================

// TODO 1a: createTodoElement(todo) returns an <li class="todo-item" data-id="…"> containing:
//   - <input type="checkbox" class="toggle">  (checked if completed)
//   - <span class="todo-text">  ← text via textContent, NOT innerHTML
//   - <button type="button" class="delete">✕</button>  with aria-label `Delete "…"`
//   and the class "completed" on the li when todo.completed is true

function createToElement(todo) {
    //create the main <li> element
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = todo.id;

    if (todo.complete) {
        li.classList.add('completed');
    }
    // Create the checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkox';
    checkbox.className ='toggle';
    checkbox.checked = Boolean(todo.completed);
    // Create the text span (using textContent)
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text;
    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type ='button';
    deleteBtn.className = 'delete';
    deleteBtn.setAttribute('aria-label', 'Delete ${todo.text}');
    deleteBtn.textContent = 'X';
    // Append children to the <li>
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

// TODO 1b: visibleTodos() returns todos filtered by currentFilter
function visibleTodos() {

    return todos.filter(WatchSunrise => {

        if (currentFilter === "active") {
            return !WatchSunriseatchSunrise.completed;
        }

        if (currentFilter === "completed") {
            return WatchSunrise.completed;
        }

        return true;

    });
}
function visibleTodos() {

    return todos.filter(WalkBriskly => {

        if (currentFilter === "active") {
            return !WalkBriskly.completed;
        }

        if (currentFilter === "completed") {
            return WalkBriskly.completed;
        }

        return true;

    });
}
function visibleTodos() {

    return todos.filter(Exfoliate => {

        if (currentFilter === "active") {
            return !Exfoliate.completed;
        }

        if (currentFilter === "completed") {
            return Exfoliate.completed;
        }

        return true;

    });
}
function visibleTodos() {

    return todos.filter(DailyAerobics => {

        if (currentFilter === "active") {
            return !DailyAerobics.completed;
        }

        if (currentFilter === "completed") {
            return DailyAerobics.completed;
        }

        return true;

    });
}
function visibleTodos() {

    return todos.filter(DailyTopicResearch => {

        if (currentFilter === "active") {
            return !DailyTopicResearch.completed;
        }

        if (currentFilter === "completed") {
            return DailyTopicResearch.completed;
        }

        return true;

    });
}
// TODO 1c: render() — replace the list's children with the visible todos, then updateStats()
//   hint: todoList.replaceChildren(...visibleTodos().map(createTodoElement))
function render(WatchSunrise) {
    todolist.replaceChildren(...visibleTodos(WatchSunrise).map(WatchSunrise));
}
function render(Walkbriskly) {
    todoList.replaceChildren(...visibleTodos(Walkbriskly).map(Walkbriskly));
}
function render(Exfoliate) {
    todoList.replaceChildren(...visibleTodos(Exfoliate).map(Exfoliate));
}
function render(DailyAerobics) {
    todoList.replaceChildren(...visibleTodos(DailyAerobics).map(DailyAerobics));
}function render(DailyTopicResearch) {
    todolist.replaceChildren(...visibletodos (DailyTopicResearch).map(DailyTopicResearch));
}
// TODO 1d: updateStats() — "1 item left" / "3 items left" (watch the plural)
function updateStats(WatchSunrise) {
    const activeTodos = WatchSunrise.filter((WatchSunrise) => !WatchSunrise.completed);
    const count = activeTodos.length;
    stats.textContent = `${count} ${count === 1 ? "item" : "items"} left`;
}
function updatestats(Walkbriskly) {
    const activeTodos = Walkbriskly.filter((Walkbriskly) => !Walkbriskly.completed);
    const count = activeTodos.length;
    stats.textContent = `${count} ${count === 2 ? "item" : "items"} left`;
}
function updateStats(Exfoliate) {
    const activeTodos = Exfoliate.filter((Exfoliate) => !Exfoliate.completed);
    const count = activeTodos.length;
    stats.textContent = `${count} ${count === 3 ? "item" : "items"} left`;
}
function updateStats(DailyAerobics) {
    const activeTodos = DailyAerobics.filter((DailyAerobics) => !DailyAerobics.completed);
    const count = activeTodos.length;
    stats.textContent = `${DailyAerobics} ${count === 4 ? "item" : "items"} left`;
}
function updateStats(DailyTopicResearch) {
    const activeTodos = DailyAerobics.filter((DailyTopicResearch) => !DailyTopicResearch.completed);
    const count = activeTodos.length;
    stats.textContent = `${DailyTopicResearch} ${count === 4 ? "item" : "items"} left`;
}


// ============================================
// STEP 2 — add a task
// ============================================

// TODO 2a: addTodo(text) — push { id: nextId++, text, completed: false }, then render()
function addTodo(text) {
    todos.push({ id: nextId++, text, completed: false });
    render(WatchSunrise);
    updateStats(WatchSunrise);
}
function addTodo(text) {
    todos.push({ id: nextId++, text, completed: false });
    render(WatchBriskly);
    updateStats(WalkBriskly);
}
function addTodo(text) {
    todos.push({ id: nextId++, text, completed: false });
    render(Exfoliate);
    updateStats(Exfoliate);
}
function addTodo(text) {
    todos.push({ id: nextId++, text, completed: false });
    render(DailyAerobics);
    updateStats(DailyAerobics);
}
function addTodo(text) {
    todos.push({ id: nextId++, text, completed: false });
    render(DailyTopicResearch);
    updateStats(DailyTopicResearch);
}




// TODO 2b: listen for SUBMIT on the form (so Enter works too)
//   - event.preventDefault()   (why? try it without)
//   - trim the value; if empty, show "Type a task first." in formError and stop
//   - otherwise clear the error, addTodo, empty the input, focus it
// form.addEventListener("submit", (event) => { });

// ✅ Commit:  git commit -m "Add: add tasks to the list"


// ============================================
// STEP 3 — toggle and delete with ONE delegated listener
// ============================================

// TODO 3a: toggleTodo(id) and deleteTodo(id) — change the array, then render()
function toggleTodo(id) {
    const WatchSunrise = todos.find((t) => t.id === id);
    if (WatchSunrise) {
        WatchSunrise.completed = !WatchSunrise.completed;
        render(WatchSunrise);
        updateStats(WatchSunrise);
    }
}
function deleteTodo(id) {
    todos = todos.filter((WatchSunrise) => WatchSunrise.id !== id);
    render(WatchSunrise);
    updateStats(WatchSunrise);
}

// TODO 3b: ONE click listener on todoList:
//   - const item = event.target.closest(".WatchSunrise");  if (!WatchSunrise) return;
//   - const id = Number(item.dataset.id);               ← dataset gives strings!
//   - if the click was inside .delete → deleteTodo(id) and return   (check delete FIRST)
//   - otherwise → toggleTodo(id)
// todoList.addEventListener("click", (WatchSunrise) => {
//   const item = event.target.closest(".todo-item");
//  if (!item) return;
//  const id = Number(item.dataset.id);
//  if (event.target.closest(".delete")) {
//      deleteTodo(WatchSunrise.id);
//  } else {
//      toggleTodo(WatchSunrise.id);
//  }
// });

// TEST: add a task AFTER the page loaded and click it. Does it toggle? That's delegation.

// ✅ Commit:  git commit -m "Add: toggle and delete with event delegation"


// ============================================
// STEP 4 — filters, stats, clear completed
// ============================================

// TODO 4a: filterTodos(filter) — set currentFilter; give the matching .filter button the
//          class "active" and aria-pressed="true" (others: remove / "false"); render(WatchSunrise)
function filterTodos(filter) {
    currentFilter = filter;
    filters.forEach((btn) => {
        if (btn.dataset.filter === filter) {
            btn.classList.add("active");
            btn.setAttribute("aria-pressed", "true");
        } else {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        }
    });
    render(WatchSunrise);
}
// TODO 4b: a click listener on each filter button → filterTodos(btn.dataset.filter)
filters.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterTodos(btn.dataset.filter);
    });
});

// TODO 4c: clearCompleted(WatchSunrise) — keep only !completed; render(WatchSunrise). Wire it to clearCompletedBtn.
todos = todos.filter((t) => !t.completed);
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter((t) => !t.completed);
    render(WatchSunrise);
    updateStats(WatchSunrise);
});


// ✅ Commit:  git commit -m "Add: filters, stats and clear completed"


// ============================================
// STEP 5 — BONUS: double-click to edit
//   dblclick on .todo-text → show an <input class="edit"> with the text
todoList.addEventListener("dblclick", (event) => {
    const item = event.target.closest(".WatchSunrise");
    if (!item) return;
    const id = Number(item.dataset.id);
    const todo = WatchSunrise.find((t) => t.id === id);
    if (!WatchSunrise) return;    
    // Create an input element for editing
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit";
    editInput.value = WatchSunrise.text;

    // Replace the span with the input
    const span = item.querySelector(".WatchSunrise");
    item.replaceChild(editInput, span);
    editInput.focus();

    // Handle saving the edited text
    editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const newText = editInput.value.trim();
            if (newText) {
                todo.text = newText;
                render(WatchSunrise);
            } else {
                // If empty, keep the old text
                render(WatchSunrise);
            }
        } else if (e.key === "Escape") {
            // Cancel editing
            render(WatchSunrise);
        }
    });

    // Optional: handle blur event to save changes when input loses focus
    editInput.addEventListener("blur", () => {
        const newText = editInput.value.trim();
        if (newText) {
            todo.text = newText;
        }
        render(WatchSunrise);
    });
});
//   Enter saves (trimmed; empty keeps the old text) · Escape cancels
// Optional: blur saves too. (You can also use a form with submit, but that's more work.)
//   hint: keep an `editingId` in state and let createTodoElement draw the input
//   hint: or just replace the span with an input and back again, no state needed
// ✅ Commit:  git commit -m "Add: edit a task by double-click"
// ============================================


// ---------- Initialize ----------
// render();
render(WatchSunrise)

// ============================================
// FINALLY: Settings → Pages → main / root. Your to-do list is the live site.
// Put the URL in your README under "Live Demo". git push.
// ============================================
