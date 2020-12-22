export default function changeLabel() {
  $("p").on("click", (event) => {
    console.log("p get clicked");
    const pVal = event.target.innerText;
    $(event.target).html(
      `<input type="text" placeholder ="LabelColor" id="textbox"/>`
    );
    $("#textbox").on("keypress", (e) => {
      e.which === 13
        ? $(event.target)
            .css("color", `${$("#textbox").val()}`)
            .html(`<p>${pVal}</p>`)
        : null;
    });
  });
}
