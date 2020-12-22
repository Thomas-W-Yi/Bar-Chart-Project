let data = [
    [1, 2, 3, 4, 5],
    [6, 7, 9, 3, 5],
    [10, 20, 40, 60, 70],
  ],
  // let data = [1, 2, 3, 4, 5],
  options = {
    graphHeight: "300px",
    graphWidth: "600px",
    barColor: ["#e27d60", "#e8a87c", "#41b3a3", "#8d8741", "#659dbd"],
    barTextColor: "black",
    valueFontSize: "1rem",
    titleTextColor: "black",
    titlePosition: "relative",
    titleFontSize: "2rem",
    spacing: data[0].length > 1 ? 600 / data[0].length : 600 / data.length,
    titleTextTransform: "uppercase",
    xTextColor: "black",
    xFontSize: "1rem",
    valuePosition: "center",
  },
  element = "tbody";

export { data, options, element };
