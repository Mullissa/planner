//select all save buttons - option 1
// document.querySelectorAll('.save-btn').forEach((button) => {
//     button.addEventListener('click', (event) => {
//         const row = event.target.parentElement;
//         const time = row.querySelector('.time-slot').value;
//         const task = row.querySelector('task-input');

//         if (time && task) {
//             alert(`Task saved: "${task}" at ${time}`);
//             // You could also store the task in localStorage for persistence
//         } else {
//             alert('Please enter both time and task.');
//         }
//     });
// });

//option 2
//select all save buttons
// Select all save buttons
// document.querySelectorAll('.save-btn').forEach((button) => {
//     button.addEventListener('click', (event) => {
//         const row = event.target.parentElement;
//         const time = row.querySelector('.time-slot').value;
//         const task = row.querySelector('.task-input').value;

//         if (time && task) {
//             // Check if a task display already exists
//             let taskDisplay = row.querySelector('.task-display');
//             if (!taskDisplay) {
//                 // Create a new span element to display the task
//                 taskDisplay = document.createElement('span');
//                 taskDisplay.classList.add('task-display');
//                 row.appendChild(taskDisplay);
//             }
//             // Update the displayed task
//             taskDisplay.textContent = `${time}: ${task}`;
//             row.querySelector('.task-input').value = ''; // Clear input field
//         } else {
//             alert('Please enter both time and task.');
//         }
//     });
// });


//option 3
// Select all save buttons
document.querySelectorAll('.save-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const row = event.target.parentElement;
        const time = row.querySelector('.time-slot').value;
        const task = row.querySelector('.task-input').value;

        if (time && task) {
            // Check if a task display already exists
            let taskDisplay = row.querySelector('.task-display');
            if (!taskDisplay) {
                // Create a new div element to display and edit the task
                taskDisplay = document.createElement('div');
                taskDisplay.classList.add('task-display');

                // Create editable task text
                const taskText = document.createElement('span');
                taskText.textContent = `${time}: ${task}`;

                // Create Edit button
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.classList.add('edit-btn');

                // Edit button functionality
                editButton.addEventListener('click', () => {
                    const newTask = prompt('Edit your task:', taskText.textContent.split(': ')[1]);
                    if (newTask) {
                        taskText.textContent = `${time}: ${newTask}`;
                    }
                });

                // Add task text and edit button to display
                taskDisplay.appendChild(taskText);
                taskDisplay.appendChild(editButton);
                row.appendChild(taskDisplay);
            } else {
                // Update task if it already exists
                taskDisplay.querySelector('span').textContent = `${time}: ${task}`;
            }

            row.querySelector('.task-input').value = ''; // Clear input field
        } else {
            alert('Please enter both time and task.');
        }
    });
});
