export function getRandomColor(colors) {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}
