import changeCaption from "./util/changeCaption.mjs";
import createBar from "./util/createBar.mjs";
import createBarSection from "./util/createBarSection.mjs";
import createY from "./util/createY.mjs";
import changeX from "./util/changeX.mjs";
import changeBarColor from "./util/changeBarColor.mjs";
import changeLabel from "./util/changeLabel.mjs";
import createStyle from "./util/createStyle.mjs";
import { element } from "./util/data.mjs";

// let data = $("#multipArray")
//     .val()
//     .split(";")
//     .map((x) => {
//       return x.split(",");
//     }),
let data = [
    [27, 6, 10],
    [2, 7, 15],
    [3, 8, 20],
    [4, 9, 25],
    [5, 10, 30],
  ],
  options = {
    graphHeight: "300px",
    graphWidth: "600px",
    barColor: ["#e27d60", "#e8a87c", "#41b3a3", "#8d8741", "#659dbd"],
    barTextColor: "black",
    barTextPosition: { top: "0", middle: "50%", bottom: "100%" },
    valueFontSize: "1rem",
    titleTextColor: "black",
    titlePosition: "relative",
    titleFontSize: "2rem",
    spacing: 600 / data.length,
    titleTextTransform: "uppercase",
    xTextColor: "black",
    xFontSize: "1rem",
    valuePosition: "center",
  };

const drawBarChart = (data, options, element) => {
  changeCaption();
  createBarSection(data, options, element);
  changeX(options);
  createBar(data, options);
  createY(options);
  createStyle(data, options);
  changeBarColor(options);
  changeLabel();
};

$("#showChart").on("click", () => {
  // data = $("#multipArray")
  //   .val()
  //   .split(";")
  //   .map((x) => {
  //     return x.split(",");
  //   });
  options = {
    ...options,
    graphHeight: `${$("#graphHeight").val()}`,
    graphWidth: `${$("#graphWidth").val()}`,
    barTextPosition: `${"barTextPosition"}`,
    titleFontSize: `${$("#titleFontSize").val()}`,
    titleTextColor: `${$("#titleFontColor").val()}`,
  };
  console.log(data, options);
  drawBarChart(data, options, element);
});
