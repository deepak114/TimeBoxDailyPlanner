document.addEventListener('DOMContentLoaded', function() {
      const dateElement = document.getElementById('currentDate');
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      dateElement.textContent = new Date().toLocaleDateString(undefined, options);

      const addTimeSlotButton = document.getElementById('addTimeSlot');
      const scheduleContainer = document.getElementById('scheduleContainer');

      addTimeSlotButton.addEventListener('click', function() {
        const timeInput = document.createElement('input');
        timeInput.type = 'time';
        timeInput.className = 'timeSlot';

        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.className = 'task';
        taskInput.placeholder = 'Task';

        const br = document.createElement('br');

        scheduleContainer.appendChild(timeInput);
        scheduleContainer.appendChild(taskInput);
        scheduleContainer.appendChild(br);
      });
    });
