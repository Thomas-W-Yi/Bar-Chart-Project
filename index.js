import changeCaption from "./util/changeCaption.mjs";
import createBar from "./util/createBar.mjs";
import createBarSection from "./util/createBarSection.mjs";
import createY from "./util/createY.mjs";
import changeX from "./util/changeX.mjs";
import changeBarColor from "./util/changeBarColor.mjs";
import changeLabel from "./util/changeLabel.mjs";
import createStyle from "./util/createStyle.mjs";
import { data, options, element } from "./util/data.mjs";

const drawBarChart = (data, options, element) => {
  changeCaption();
  createBarSection(data, options, element);
  changeX(options);
  createBar(data, options);
  createY();
  createStyle(data, options);
  changeBarColor(options);
  changeLabel();
};
drawBarChart(data, options, element);
