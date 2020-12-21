import createBar from "./util/createBar.mjs";
import createStyle from "./util/createStyle.mjs";
import changeTitle from "./util/changeTitle.mjs";
import { data, options, element } from "./util/data.mjs";

const drawBarChart = (data, options, element) => {
  let arr = [...data];
  let max = arr.sort((a, b) => {
    return b - a;
  })[0];
  data.map((x) => {
    return createBar(x, max, element);
  });
  createStyle(options);
  changeTitle();
};

drawBarChart(data, options, element);
