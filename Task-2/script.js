/**
 * ==============================================================================
 * TaskFlow — Modern To-Do List Web Application
 * Author: Darshan Makwana
 * Technologies: Pure Vanilla JavaScript (ES6+)
 * ==============================================================================
 *
 * Core Concepts Demonstrated:
 * 1. DOM Element Selection (`getElementById`, `querySelector`, `querySelectorAll`)
 * 2. Event Listeners & Event Handling (`addEventListener`, `event.preventDefault()`)
 * 3. Dynamic Element Creation & DOM Manipulation (`createElement`, `append`, `remove`)
 * 4. CSS Class Toggling (`classList.toggle`, `classList.add`, `classList.remove`)
 * 5. Safe Text Insertion (`textContent` to prevent Cross-Site Scripting / XSS)
 * 6. State Management & Dynamic Counters Calculation
 * 7. Event Delegation for efficient event handling
 * ==============================================================================
 */

// Run our script once the DOM is fully loaded and ready
document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------------------------------------------
  // 1. DOM Element References
  // ----------------------------------------------------------------------------
  const todoForm = document.getElementById('todo-form');
  const taskInput = document.getElementById('task-input');
  const inputError = document.getElementById('input-error');
  const taskList = document.getElementById('task-list');
  const emptyState = document.getElementById('empty-state');
  
  // Counters
  const totalCountEl = document.getElementById('total-count');
  const completedCountEl = document.getElementById('completed-count');
  const remainingCountEl = document.getElementById('remaining-count');
  
  // Actions & Filters
  const clearCompletedBtn = document.getElementById('clear-completed-btn');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Application State
  let currentFilter = 'all'; // Can be 'all', 'active', or 'completed'

  // ----------------------------------------------------------------------------
  // 2. Helper Functions
  // ----------------------------------------------------------------------------

  /**
   * Updates all statistical counters and handles the visibility of empty states
   * and action buttons based on the current tasks list.
   */
  const updateCounters = () => {
    // Select all task items in the DOM
    const allTasks = taskList.querySelectorAll('.task-item');
    const completedTasks = taskList.querySelectorAll('.task-item.completed');

    const totalCount = allTasks.length;
    const completedCount = completedTasks.length;
    const remainingCount = totalCount - completedCount;

    // Update numbers in the DOM
    totalCountEl.textContent = totalCount;
    completedCountEl.textContent = completedCount;
    remainingCountEl.textContent = remainingCount;

    // Enable / Disable "Clear Completed" button
    if (completedCount > 0) {
      clearCompletedBtn.removeAttribute('disabled');
    } else {
      clearCompletedBtn.setAttribute('disabled', 'true');
    }

    // Check if empty state should be displayed
    applyFilter(currentFilter);
  };

  /**
   * Displays an inline validation error message with visual feedback
   * @param {string} message - The error message to display
   */
  const showError = (message) => {
    inputError.textContent = message;
    inputError.classList.add('visible');
    taskInput.classList.add('input-invalid');

    // Automatically remove invalid shake animation class after animation completes
    setTimeout(() => {
      taskInput.classList.remove('input-invalid');
    }, 400);
  };

  /**
   * Clears the validation error message and resets input error styling
   */
  const clearError = () => {
    inputError.textContent = '';
    inputError.classList.remove('visible');
    taskInput.classList.remove('input-invalid');
  };

  /**
   * Filters the visible tasks on screen (All / Active / Completed)
   * @param {string} filter - 'all', 'active', or 'completed'
   */
  const applyFilter = (filter) => {
    currentFilter = filter;
    const allTasks = taskList.querySelectorAll('.task-item');
    let visibleCount = 0;

    allTasks.forEach((taskItem) => {
      const isCompleted = taskItem.classList.contains('completed');

      if (filter === 'all') {
        taskItem.style.display = 'flex';
        visibleCount++;
      } else if (filter === 'active') {
        if (!isCompleted) {
          taskItem.style.display = 'flex';
          visibleCount++;
        } else {
          taskItem.style.display = 'none';
        }
      } else if (filter === 'completed') {
        if (isCompleted) {
          taskItem.style.display = 'flex';
          visibleCount++;
        } else {
          taskItem.style.display = 'none';
        }
      }
    });

    // Show empty state if no tasks match the filter or if list is empty
    if (visibleCount === 0) {
      emptyState.classList.add('visible');
      const emptyTitle = emptyState.querySelector('.empty-title');
      const emptyText = emptyState.querySelector('.empty-text');

      if (allTasks.length === 0) {
        emptyTitle.textContent = 'No tasks yet';
        emptyText.textContent = 'Add a new task above to start organizing your day!';
      } else if (filter === 'active') {
        emptyTitle.textContent = 'No active tasks';
        emptyText.textContent = 'All your tasks are completed! Great job!';
      } else if (filter === 'completed') {
        emptyTitle.textContent = 'No completed tasks';
        emptyText.textContent = 'Complete some tasks from your list to see them here.';
      }
    } else {
      emptyState.classList.remove('visible');
    }
  };

  /**
   * Creates a new DOM list item (li) representing a task
   * @param {string} taskText - The user-entered text for the task
   * @returns {HTMLElement} - The created li.task-item element
   */
  const createTaskElement = (taskText) => {
    // 1. Create the parent <li> element
    const li = document.createElement('li');
    li.className = 'task-item';

    // 2. Create the clickable content container (checkbox + text)
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'task-content';
    contentWrapper.setAttribute('role', 'button');
    contentWrapper.setAttribute('tabindex', '0');
    contentWrapper.setAttribute('aria-label', `Toggle completion for: ${taskText}`);

    // 3. Create the custom checkbox indicator
    const checkbox = document.createElement('span');
    checkbox.className = 'task-checkbox';
    checkbox.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

    // 4. Create the task text element using textContent for security (XSS prevention)
    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = taskText;

    // Append checkbox and text to content container
    contentWrapper.appendChild(checkbox);
    contentWrapper.appendChild(textSpan);

    // 5. Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'task-delete-btn';
    deleteBtn.setAttribute('aria-label', `Delete task: ${taskText}`);
    deleteBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
    `;

    // 6. Event: Toggle task completion status
    const toggleComplete = () => {
      li.classList.toggle('completed');
      updateCounters();
    };

    contentWrapper.addEventListener('click', toggleComplete);

    // Keyboard accessibility for content wrapper (Enter or Space key)
    contentWrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleComplete();
      }
    });

    // 7. Event: Delete task with smooth animation
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Stop event bubbling
      li.classList.add('removing');
      
      // Remove element from DOM after transition completes
      li.addEventListener('animationend', () => {
        li.remove();
        updateCounters();
      });
    });

    // 8. Assemble the task item
    li.appendChild(contentWrapper);
    li.appendChild(deleteBtn);

    return li;
  };

  /**
   * Handles adding a new task to the list
   */
  const handleAddTask = (e) => {
    // Prevent default form reload behavior
    if (e) {
      e.preventDefault();
    }

    const taskText = taskInput.value.trim();

    // Validation: Check for empty input
    if (taskText === '') {
      showError('Please enter a task before adding!');
      taskInput.focus();
      return;
    }

    // Clear any existing error messages
    clearError();

    // Create and prepend the new task element
    const newTaskElement = createTaskElement(taskText);
    taskList.prepend(newTaskElement);

    // Reset input field and retain focus for quick multi-entry
    taskInput.value = '';
    taskInput.focus();

    // Update counters and update UI
    updateCounters();
  };

  // ----------------------------------------------------------------------------
  // 3. Event Listeners
  // ----------------------------------------------------------------------------

  // Form submit event (handles both "Add Task" button click and "Enter" key press)
  todoForm.addEventListener('submit', handleAddTask);

  // Clear validation errors dynamically when user types
  taskInput.addEventListener('input', () => {
    if (inputError.classList.contains('visible')) {
      clearError();
    }
  });

  // Clear all completed tasks button
  clearCompletedBtn.addEventListener('click', () => {
    const completedTasks = taskList.querySelectorAll('.task-item.completed');
    
    if (completedTasks.length === 0) return;

    completedTasks.forEach((taskItem) => {
      taskItem.classList.add('removing');
      taskItem.addEventListener('animationend', () => {
        taskItem.remove();
        updateCounters();
      });
    });
  });

  // Filter tabs click handling
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const selectedFilter = btn.getAttribute('data-filter');
      applyFilter(selectedFilter);
    });
  });

  // ----------------------------------------------------------------------------
  // 4. Initial Setup / Bootstrapping
  // ----------------------------------------------------------------------------
  updateCounters();
  taskInput.focus();
});
