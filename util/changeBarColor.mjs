export default function changeBarColor() {
  $("td").on("click", (event) => {
    const pVal = event.target.innerText;
    $(event.target).html(`<input placeholder ="newColor" id="textboxBar"/>`);
    $("#textboxBar").on("keypress", (e) => {
      e.which === 13
        ? $(event.target)
            .css("backgroundColor", `${$("#textboxBar").val()}`)
            .html(`<p>${pVal}</p>`)
        : null;
    });
  });
}
