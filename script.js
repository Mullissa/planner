//select all save buttons
document.querySelectorAll('.save-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const row = event.target.parentElement;
        const time = row.querySelector('.time-slot').value;
        const task = row.querySelector('task-input');

        if (time && task) {
            alert('Task saved: "${task}" at ${time}');
            //you could also the task in localStorage for persistence
        } else {
            alert('Please enter both time and task.');
        }
    });
});
