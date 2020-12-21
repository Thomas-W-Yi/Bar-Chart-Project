export default function createBar1(data, options) {
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
      });
  });
}
