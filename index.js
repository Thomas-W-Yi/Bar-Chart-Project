let data = [6, 9, 4, 2, 7],
  options = {
    height: 2,
    color: "red",
    labelColor: "black",
    textPosition: "right",
    fontSize: "1rem",
    spacing: 1,
    xAxis: "",
    yAxis: "",
    title: "Bar Char",
  },
  element = "figure ul";

const createBar = (num, max, element) => {
  let percentage = (num / max) * 100,
    li = $(`${element}`).append("<li></li>"),
    currentLi = $("li").last().addClass(`${num}`),
    div = $(`.${num}`).append("<div></div>"),
    container = $(`.${num} div`).addClass(`container`),
    subDiv = $(`.${num} .container`).append("<div></div>"),
    Bar1 = $(`.${num} .container`)
      .children()
      .addClass("skills")
      .text(`${num}`)
      .width(`${percentage}%`);
  return Bar1;
};

const createStyle = (options) => {
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
};

const drawBarChart = (data, options, element) => {
  let arr = [...data];
  let max = arr.sort((a, b) => {
    return b - a;
  })[0];
  data.map((x) => {
    return createBar(x, max, element);
  });
  createStyle(options);
};
drawBarChart(data, options, element);

$("figcaption")
  .html("<input type='text' id='addInput' value='add title'/>")
  .append("<button id='myBtn'>Change Chart Title</button>");
$("#myBtn").click(() => {
  var str = $("#addInput").val();
  $("figcaption").text(`${str}`);
});
