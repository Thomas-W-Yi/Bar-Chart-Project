export default function changeTitle() {
  $("caption").on("click", (event) => {
    $(event.target).html(
      `<input type="text" placeholder ="newName" id="textbox"/>`
    );

    $("#textbox").on("keypress", (e) => {
      e.which === 13 ? $(event.target).text(`${$("#textbox").val()}`) : null;
    });
  });
}
