import { randomByte } from "../numbers/numbers.js";

export function randomColor() {
    return `rgb(${[1, 2, 3].map(randomByte).join(',')})`;
}
