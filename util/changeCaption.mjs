export default function changeTitle(options) {
  $("caption").on("click", (event) => {
    console.log(event.target.innerText);
    $(event.target).html(
      `<input type="text" placeholder ="newName" id="textbox"/>`
    );

    $("#textbox").on("keypress", (e) => {
      e.which === 13 ? $(event.target).text(`${$("#textbox").val()}`) : null;
    });
  });
}
