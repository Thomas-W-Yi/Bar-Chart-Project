export default function createBar(data, options) {
  let max = [],
    { barColor } = options;
  data.map((subArr) => {
    return max.push(0);
  });

  if (data[0].length > 1) {
    for (let i = 0; i < data.length; i++) {
      data[i].map((x) => {
        x - max[i] > 0 ? (max[i] = x) : null;
      });

      data[i].map((x, index) => {
        let percentage = (x / max[i]) * 100;
        $(`#${index}`).append(`<td class="bar${i}${index}"><p>${x}</p></td>`);
        $(`.bar${i}${index}`).css({
          height: `${percentage + 1}%`,
          width: `${100 / data.length}px`,
          backgroundColor: `${barColor[i]}`,
          marginLeft: `${(100 / data.length) * i}px`,
        });
      });
    }
  } else {
    let arr = [...data],
      max = arr.sort((a, b) => {
        return b - a;
      })[0];
    data.map((x, index) => {
      let percentage = (x / max) * 100;
      $(`#${index}`).append(`<td class="bar"><p>${x}</p></td>`);
      $("td")
        .last()
        .css({
          height: `${percentage + 1}%`,
          width: "50px",
          backgroundColor: `${barColor[0]}`,
        });
    });
  }
}
