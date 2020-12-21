export default function createStyle1(options) {
  const {
    height,
    width,
    barColor,
    barTextColor,
    titleTextColor,
    titleFontSize,
    fontSize,
    textTransform,
    xTextColor,
    xFontSize,
  } = options;
  $("#q-graph").css({ width: `${width}`, height: `${height}` });
  $("caption").css({
    textTransform: `${textTransform}`,
    color: `${titleTextColor}`,
    fontSize: `${titleFontSize}`,
  });
  $("td").css({
    backgroundColor: `${barColor}`,
    color: `${barTextColor}`,
    fontSize: `${fontSize}`,
  });
  $("tbody tr").css({
    color: `${xTextColor}`,
    fontSize: `${xFontSize}`,
  });
}
