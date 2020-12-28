export default function createBar(data, options) {
  let subArrSum = data.map((x) => {
      return x.reduce((sum, val) => {
        return (sum += val);
      }, 0);
    }),
    { barColor } = options;
  let percentArr = [];

  if (data[0].length > 1) {
    for (let i = 0; i < data.length; i++) {
      let subArr = [];
      data[i].map((x) => {
        return subArr.push(x / subArrSum[i]);
      });
      percentArr.push(subArr);
    }

    for (let i = 0; i < data.length; i++) {
      let max = 0;

      subArrSum.map((x) => {
        return x > max ? (max = x) : max;
      });

      data[i].map((x, index) => {
        let percentage = (x / max) * 100;

        $(`#${i}`).append(
          `<tr class="trBar${i}${index}"><td class="bar${i}${index}"><p>${x}</p></td></tr>`
        );
        $(`.trBar${i}${index}`).css({
          marginBottom: `${percentArr[i - 1]}`,
          zIndex: `${9 - index}`,
        });
        $(`.bar${i}${index}`).css({
          height: `${percentage}%`,
          width: "50px",
          backgroundColor: `${barColor[index]}`,
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
      $(`#${index}`).append(
        `<div class="flexItem"><td class="bar${i}"><p>${x}</p></td></div>`
      );
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
