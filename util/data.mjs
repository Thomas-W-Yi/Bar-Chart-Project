let data = $("#multipArray")
    .val()
    .split(";")
    .map((x) => {
      return x.split(",");
    }),
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

$("#singleArray").on("keypress", (e) => {
  e.which === 13 ? (data = $("#dataInput").val()) : null;
  console.log(data);
});

$("#multipArray").on("keypress", (e) => {
  e.which === 13
    ? (data = $("#multipArray")
        .val()
        .split(";")
        .map((x) => {
          return x.split(",");
        }))
    : null;
});

$("#graphHeight").on("keypress", (e) => {
  e.which === 13 ? (options.graphHeight = $("#graphHeight").val()) : null;
});
$("#graphWidth").on("keypress", (e) => {
  e.which === 13 ? (options.graphWidth = $("#graphWidth").val()) : null;
});
$("#labelColor").on("keypress", (e) => {
  e.which === 13 ? (options.barTextColor = $("#labelColor").val()) : null;
});
$("#Spacing").on("keypress", (e) => {
  e.which === 13 ? (options.Spacing = $("#Spacing").val()) : null;
});
$("#fontSize").on("keypress", (e) => {
  e.which === 13 ? (options.titleFontSize = $("#titleFontSize").val()) : null;
});
$("#fontColor").on("keypress", (e) => {
  e.which === 13 ? (options.titleTextColor = $("#titleTextColor").val()) : null;
});
$("#element").on("keypress", (e) => {
  e.which === 13 ? (element = $("#element").val()) : null;
});

export { data, options, element };
