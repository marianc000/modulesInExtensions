import { randomColor } from './colors/colors.js';

const loadedAt = Date.now();

function setBackground(f) {
  document.querySelectorAll('*').forEach(e => e.style.backgroundColor = f());
}

export function off() {
 // console.log('>off loadedAt=', loadedAt);
  setBackground(() => '');
}

export function on() {
 //  console.log('>on loadedAt=', loadedAt);
  setBackground(() => randomColor());
}

