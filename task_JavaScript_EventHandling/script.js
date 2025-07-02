const backgroundColors = [
  // Pastels
  '#f8e1f4', '#d0ebff', '#ffe5b4', '#e0ffe0', '#fef1d1',
  '#d6f5f5', '#f3e5f5', '#faf0e6', '#e6f2ff', '#fdfcdc',

  // Deep elegant shades
  '#1e1e2f', '#2d2d3f', '#1a1a1d', '#222831', '#0f2027',
  '#2c3e50', '#4b4b4b', '#2b2d42', '#121212', '#3a2e39',

  // Warm and creative tones
  '#ffcdb2', '#b5ead7', '#c3bef0', '#a7c5eb', '#f4acb7',
  '#b9fbc0', '#ffb3c6', '#e0bbe4', '#b8c0ff', '#d9ed92'
];

function getRandomColor() {
  const index = Math.floor(Math.random() * backgroundColors.length);
  return backgroundColors[index];
}

function changeBackgroundColor() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;

  const isDark = isDarkColor(newColor);
  document.getElementById('heading').style.color = isDark ? '#f2f2f2' : '#222';
}

function isDarkColor(hex) {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}

window.onload = () => {
  changeBackgroundColor();
};

document.getElementById('colorBtn').addEventListener('click', changeBackgroundColor);
