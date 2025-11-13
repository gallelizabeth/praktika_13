        const form = document.querySelector('.contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Сообщение отправлено!');
                form.reset();
            } else {
                alert('Пожалуйста, заполните все поля формы.');
            }
        });