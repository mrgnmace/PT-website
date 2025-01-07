const textarea = document.getElementById('message');

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto'; // Reset height to calculate scroll height
  textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
});
