        function formatDate(dateString) {
            const date = new Date(dateString);
            const months = [
                'янв', 'фев', 'мар', 'апр', 'мая', 'июн',
                'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
            ];
            const day = date.getDate();
            const month = months[date.getMonth()];
            return `${day} ${month}`;
        }

        document.getElementById('progress-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const date = document.getElementById('entry-date').value;
            const task = document.getElementById('entry-task').value;
            const status = document.getElementById('entry-status').value;
            
            if (!date || !task) {
                alert('Пожалуйста, заполните все поля');
                return;
            }
            
            const formattedDate = formatDate(date);
            const newEntry = document.createElement('div');
            newEntry.className = `progress-item ${status === 'completed' ? 'completed' : 'in-progress'}`;
            newEntry.innerHTML = `
                <span class="date">${formattedDate}</span>
                <span class="task">${task}</span>
                <span class="status">${status === 'completed' ? '✓' : 'in progress'}</span>
                <button class="delete-btn">×</button>
            `;
            
            const timeline = document.getElementById('progress-timeline');
            timeline.insertBefore(newEntry, timeline.firstChild);
            
            newEntry.querySelector('.delete-btn').addEventListener('click', function() {
                newEntry.remove();
            });
            
            document.getElementById('progress-form').reset();
            
            alert('Запись успешно добавлена!');
        });
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.parentElement.remove();
            });
        });
        
        document.getElementById('entry-date').valueAsDate = new Date();