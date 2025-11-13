        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card-large');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');        
                const filter = button.getAttribute('data-filter');
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        const modal = document.getElementById('project-modal');
        const closeBtn = document.querySelector('.close');
        
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('h3').textContent;
                const description = card.querySelector('p').textContent;
                const category = card.getAttribute('data-category');
                modal.style.display = 'block';
                document.getElementById('modal-title').textContent = title;
                
                let fullDescription = '';
                let liveLink = '#';
                let sourceLink = '#';
                
                switch(category) {
                    case 'html':
                        fullDescription = 'Статический веб-сайт, созданный с использованием HTML и CSS.';
                        liveLink = '';
                        sourceLink = 'https://github.com';
                        break;
                    case 'js':
                        fullDescription = 'Интерактивное приложение на чистом JavaScript.';
                        liveLink = '';
                        sourceLink = 'https://github.com';
                        break;
                    case 'react':
                        fullDescription = 'Приложение на React с использованием современных хуков, управления состоянием и взаимодействием с API.';
                        liveLink = '';
                        sourceLink = 'https://github.com';
                        break;
                    case 'bootstrap':
                        fullDescription = 'Адаптивный веб-сайт, построенный на фреймворке Bootstrap. Использована сеточная система и готовые компоненты.';
                        liveLink = '';
                        sourceLink = 'https://github.com';
                        break;
                }
                
                document.getElementById('modal-description').textContent = fullDescription;
                document.getElementById('modal-live').href = liveLink;
                document.getElementById('modal-source').href = sourceLink;
            });
        });
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });