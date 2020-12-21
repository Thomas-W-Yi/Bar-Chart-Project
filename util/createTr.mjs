export default function createTr(data, options, element) {
  const { spacing } = options;
  data.map((x, index) => {
    $(`${element}`).append(
      `<tr class="tr" id=${index}><th scope="row">index${index + 1}</th></tr>`
    );
    $("tbody tr")
      .last()
      .css({
        left: `${index * spacing}px`,
      });
  });
}
