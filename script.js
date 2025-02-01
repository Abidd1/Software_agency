// Get the toggle button and body element
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  // Save the current theme to localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.setItem('theme', '');
  }
});