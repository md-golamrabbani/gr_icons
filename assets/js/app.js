
const toast = document.getElementById('toast');
const notFoundElement = document.getElementById('notFound');

// search icon
document.getElementById('searchBox').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase().trim();
  const icons = document.querySelectorAll('.grid .icon');
  let found = false;

  icons.forEach(icon => {
    const iconName = icon.querySelector('.class_name').textContent.toLowerCase();
    if (searchTerm === '' || iconName.includes(searchTerm)) {
      icon.style.display = 'block';
      found = true;
    } else {
      icon.style.display = 'none';
    }
  });

  if (!found) {
    if (notFoundElement) {
      notFoundElement.style.display = 'flex';
    } else {
      const h1 = document.createElement('h1');
      h1.id = 'notFound';
      h1.textContent = 'Not found';
      document.querySelector('.grid').appendChild(h1);
    }
  } else {
    if (notFoundElement) {
      notFoundElement.style.display = 'none';
    }
  }
});

// copy icon class name
// Add click event to each icon
document.querySelectorAll('.grid .icon').forEach(icon => {
  icon.addEventListener('click', function () {
    const className = this.querySelector('.class_name').textContent.trim();
    copyToClipboard(className);
  });
});

// Function to copy text to clipboard
function copyToClipboard(text) {
  toast.style.display = 'flex';
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  hideDivAfterDelay();
}

// Function to hide the div after 4 seconds
function hideDivAfterDelay() {
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}