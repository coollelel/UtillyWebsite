
const overlay = document.getElementById('interactionOverlay');
  const alertBox = document.getElementById('alertBox');
  const ding = document.getElementById('dingSound');
window.focus()
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.getElementById('customAlert').style.display = 'flex';
    ding.play();
  });

  let isDragging = false, offsetX = 0, offsetY = 0;

  alertBox.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - alertBox.offsetLeft;
    offsetY = e.clientY - alertBox.offsetTop;
    alertBox.style.cursor = "grabbing";
  });
  window.addEventListener("mousemove", (e) => {
    if (isDragging) {
      alertBox.style.left = `${e.clientX - offsetX}px`;
      alertBox.style.top = `${e.clientY - offsetY}px`;
    }
  });
  window.addEventListener("mouseup", () => {
    isDragging = false;
    alertBox.style.cursor = "move";
  });
