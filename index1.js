import changeCaption from "./util/changeCaption.mjs";
import createBar1 from "./util/createBar1.mjs";
import createTr from "./util/createTr.mjs";
import createTicks from "./util/createTicks.mjs";
import changeX from "./util/changeX.mjs";
import createStyle1 from "./util/createStyle1.mjs";
import { data, options, element } from "./util/data.mjs";

const drawBarChart = (data, options, element) => {
  changeCaption(options);
  createTr(data, options, element);
  changeX(options);
  createBar1(data, options);
  createTicks();
  createStyle1(options);
};
drawBarChart(data, options, element);
