import changeCaption from "./util/changeCaption.mjs";
import createBar from "./util/createBar.mjs";
import createBarSection from "./util/createBarSection.mjs";
import createY from "./util/createY.mjs";
import changeX from "./util/changeX.mjs";
import createStyle1 from "./util/createStyle1.mjs";
import { data, options, element } from "./util/data.mjs";

const drawBarChart = (data, options, element) => {
  changeCaption();
  createBarSection(data, options, element);
  changeX(options);
  createBar(data, options);
  createY();
  createStyle1(options);
};
drawBarChart(data, options, element);
