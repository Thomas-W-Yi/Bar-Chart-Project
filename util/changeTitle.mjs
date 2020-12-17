export default function changeTitle() {
  $("figcaption")
    .html("<input type='text' id='addInput' value='add title'/>")
    .append("<button id='myBtn'>Change Chart Title</button>");
  $("#myBtn").click(() => {
    var str = $("#addInput").val();
    $("figcaption").text(`${str}`);
  });
}
