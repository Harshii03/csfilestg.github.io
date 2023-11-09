        const darkModeToggle = document.getElementById('darkModeToggle');
        const bodyElement = document.body;

        // Check if the user has a preferred color scheme and set the toggle accordingly
        if (localStorage.getItem('darkMode') === 'enabled') {
            bodyElement.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }

        // Toggle dark mode when the switch is clicked
        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                bodyElement.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                bodyElement.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
