const darkModeToggle = document.getElementById('darkModeToggle');
const bodyElement = document.body;
const imgDarkMode = document.getElementById('imgDarkMode');
const imgLightMode = document.getElementById('imgLightMode');

// Check if the user has a preferred color scheme and set the toggle accordingly
if (localStorage.getItem('darkMode') === 'enabled') {
    bodyElement.classList.add('dark-mode');
    darkModeToggle.checked = true;
    imgDarkMode.style.display = 'block';
    imgLightMode.style.display = 'none';
} else {
    imgDarkMode.style.display = 'none';
    imgLightMode.style.display = 'block';
}

// Toggle dark mode when the switch is clicked
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        bodyElement.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        imgDarkMode.style.display = 'block';
        imgLightMode.style.display = 'none';
    } else {
        bodyElement.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        imgDarkMode.style.display = 'none';
        imgLightMode.style.display = 'block';
    }
});
