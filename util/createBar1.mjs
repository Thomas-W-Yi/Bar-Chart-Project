export default function createBar1(index, num, max) {
  let percentage = (num / max) * 100;
  $(`#${index}`).append(`<td class="sent bar"><p>${num}</p></td>`);
  $("td")
    .last()
    .css("height", `${percentage + 1}%`);
}
