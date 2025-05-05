window.focus()
window.addEventListener('load', () => {
    document.getElementById('customAlert').style.display = 'flex';
    document.getElementById('dingSound').play();
  });

  const alertBox = document.getElementById("alertBox");
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
