let data = [1, 2, 3, 4, 5],
  options = {
    height: 1,
    color: 'red',
    labelColor: 'black',
    spacing: 1,
    xAxis: '',
    yAxis: '',
  },
  element = '';

const createBar = (num) => {
  let percentage = num * 2 * 10;
  let li = $('ul').append('<li></li>');
  let currentLi = $('li').last().addClass(`${num}`);
  let div = $(`.${num}`).append('<div></div>');
  let container = $(`.${num} div`).addClass(`container`);
  let subDiv = $(`.${num} .container`).append('<div></div>');
  let Bar1 = $(`.${num} .container`)
    .children()
    .addClass('skills')
    .text(`${num}`)
    .width(`${percentage}%`);
  return Bar1;
};

const createStyle = (options) => {
  const { height, color, labelColor, spacing, xAxis, yAxis } = options;
  let li = $('.skills').css({
    height: '2',
    backgroundColor: 'red',
    color: 'black',
    'line-height': '1',
  });
};

const drawBarChart = (data, options, element) => {
  data.map((x) => {
    return createBar(x);
  });
  createStyle(options);
};
drawBarChart(data, options, element);

// const { height, color, labelColor, spacing, xAxis, yAxis } = options;
// let li = $('.skills').css({
//   height: '2',
//   backgroundColor: 'red',
//   color: 'black',
//   'line-height': '1',
// });
