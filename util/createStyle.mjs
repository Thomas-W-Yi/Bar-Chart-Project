export default function createStyle(options) {
  const {
    height,
    color,
    labelColor,
    textPosition,
    fontSize,
    spacing,
    xAxis,
    yAxis,
    title,
  } = options;
  let li = $(".skills").css({
    height: `${height}`,
    backgroundColor: `${color}`,
    color: `${labelColor}`,
    textAlign: `${textPosition}`,
    fontSize: `${fontSize}`,
    "line-height": `${spacing}`,
  });
}
