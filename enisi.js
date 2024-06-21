const circle = document.querySelector('circle');
let radius = 50;
let targetRadius = 100;

function animate() {
  radius = (radius + (targetRadius - radius) * 0.1).toFixed(2);
  circle.getAttribute('r', radius);
  requestAnimationFrame(animate);
}

animate();
