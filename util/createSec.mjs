export default function createBar1(index, spacing) {
  $("tbody").append(
    `<tr class="qtr" id=${index}><th scope="row">index${index + 1}</th></tr>`
  );
  $("tbody tr")
    .last()
    .css(`left`, `${index * spacing}px`);
}
