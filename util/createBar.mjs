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
      let subArr = [0];
      data[i].map((x) => {
        return subArr.push((x / subArrSum[i]) * 100);
      });
      let nestArr = [],
        sub = [];
      for (let j = 0; j < subArr.length; j++) {
        sub = [...sub, subArr[j]];
        nestArr.push(sub);
      }
      percentArr.push(
        nestArr.map((x) => {
          return x.reduce((sum, val) => {
            return (sum = sum + val);
          }, 0);
        })
      );
    }

    for (let i = 0; i < data.length; i++) {
      let max = 0;
      subArrSum.map((x) => {
        return x > max ? (max = x) : max;
      });

      data[i].map((x, index) => {
        let percentage = (x / max) * 100;
        console.log(percentArr);
        $(`#${i}`).append(
          `<tr class="trBar${i}${index}"><td class="bar${i}${index}"><p>${x}</p></td></tr>`
        );
        $(`.trBar${i}${index}`).css({
          height: "100%",
          zIndex: `${9 - index}`,
        });

        $(`.bar${i}${index}`).css({
          height: `${percentage + percentArr[i][index]}%`,
          width: "50px",
          backgroundColor: `${barColor[index]}`,
          paddingTop: `${percentArr[i]}%`,
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
