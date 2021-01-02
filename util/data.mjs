const createPoint = (x, y) => Object.freeze([x, y]);
const movePointBy = ([x, y], dx, dy) => {
  return Object.freeze([x + dx, y + dy]);
};
let point = createPoint(0, 0);
console.log(point);
point = movePointBy(point, 5, 5);
console.log(point);
point = movepointBy(point, -2, 2);
console.log(point);
