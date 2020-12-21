import changeCaption from "./util/changeCaption.mjs";
import createBar from "./util/createBar1.mjs";
import createSec from "./util/createSec.mjs";
import createTicks from "./util/createTicks.mjs";
import changeX from "./util/changeX.mjs";
import { data, options, element } from "./util/data.mjs";

const drawBarChart = (data, options, element) => {
  let arr = [...data],
    max = arr.sort((a, b) => {
      return b - a;
    })[0],
    spacing = 600 / arr.length + 10;
  changeCaption();
  data.map((x, index) => {
    return createSec(index, spacing);
  });
  changeX();
  data.map((x, index) => {
    return createBar(index, x, max, spacing);
  });
  createTicks();
};
drawBarChart(data, options, element);
