$(document).ready(function () {
  var human, computer;
  var c00, c01, c02, c10, c11, c12, c20, c21, c22;
  var turn = 0;
  $("#x").click(function () {
    human = "X";
    computer = "O";
    $("#choice").fadeOut();
    $("#board").fadeTo("slow", 1);
  });
  $("#o").click(function () {
    human = "O";
    computer = "X";
    $("#choice").fadeOut();
    $("#board").fadeTo("slow", 1);
  });
  function clearBoard() {
    c00 = $("#c00").text("");
    c01 = $("#c01").text("");
    c02 = $("#c02").text("");
    c10 = $("#c10").text("");
    c11 = $("#c11").text("");
    c12 = $("#c12").text("");
    c20 = $("#c20").text("");
    c21 = $("#c21").text("");
    c22 = $("#c22").text("");
    turn = 0;
  }
  $("#new-game").click(function () {
    clearBoard();
    $("#final-screen").hide();
    $("#choice").fadeTo("slow", 1);
  });
  $("td").click(function () {
    if (turn === 0) {
      if ($(this).text() === "") {
        $(this).text(human);
        checkSquareValues();
        checkBoardState();
        turn = 1;
        computerMove();
        checkSquareValues();
        checkBoardState();
      } else {
        alert(
          "There is already a move on that square. Please pick a different square."
        );
      }
    }
  });
  function computerMove() {
    if (
      c00 === "" &&
      ((c01 === computer && c02 === computer) ||
        (c10 === computer && c20 === computer) ||
        (c11 === computer && c22 === computer))
    ) {
      $("#c00").text(computer);
      turn = 0;
    } else if (
      c01 === "" &&
      ((c00 === computer && c02 === computer) ||
        (c11 === computer && c21 === computer))
    ) {
      $("#c01").text(computer);
      turn = 0;
    } else if (
      c02 === "" &&
      ((c00 === computer && c01 === computer) ||
        (c12 === computer && c22 === computer) ||
        (c11 === computer && c20 === computer))
    ) {
      $("#c02").text(computer);
      turn = 0;
    } else if (
      c10 === "" &&
      ((c00 === computer && c20 === computer) ||
        (c11 === computer && c12 === computer))
    ) {
      $("#c10").text(computer);
      turn = 0;
    } else if (
      c11 === "" &&
      ((c10 === computer && c12 === computer) ||
        (c00 === computer && c22 === computer) ||
        (c02 === computer && c20 === computer))
    ) {
      $("#c11").text(computer);
      turn = 0;
    } else if (
      c12 === "" &&
      ((c10 === computer && c11 === computer) ||
        (c02 === computer && c22 === computer))
    ) {
      $("#c12").text(computer);
      turn = 0;
    } else if (
      c20 === "" &&
      ((c21 === computer && c22 === computer) ||
        (c00 === computer && c10 === computer) ||
        (c02 === computer && c11 === computer))
    ) {
      $("#c20").text(computer);
      turn = 0;
    } else if (
      c21 === "" &&
      ((c20 === computer && c22 === computer) ||
        (c01 === computer && c11 === computer))
    ) {
      $("#c21").text(computer);
      turn = 0;
    } else if (
      c22 === "" &&
      ((c20 === computer && c21 === computer) ||
        (c02 === computer && c12 === computer) ||
        (c00 === computer && c11 === computer))
    ) {
      $("#c22").text(computer);
      turn = 0;
    } else if (
      c00 === "" &&
      ((c01 === human && c02 === human) ||
        (c10 === human && c20 === human) ||
        (c11 === human && c22 === human))
    ) {
      $("#c00").text(computer);
      turn = 0;
    } else if (
      c01 === "" &&
      ((c00 === human && c02 === human) || (c11 === human && c21 === human))
    ) {
      $("#c01").text(computer);
      turn = 0;
    } else if (
      c02 === "" &&
      ((c00 === human && c01 === human) ||
        (c12 === human && c22 === human) ||
        (c11 === human && c20 === human))
    ) {
      $("#c02").text(computer);
      turn = 0;
    } else if (
      c10 === "" &&
      ((c00 === human && c20 === human) || (c11 === human && c12 === human))
    ) {
      $("#c10").text(computer);
      turn = 0;
    } else if (
      c11 === "" &&
      ((c10 === human && c12 === human) ||
        (c00 === human && c22 === human) ||
        (c02 === human && c20 === human))
    ) {
      $("#c11").text(computer);
      turn = 0;
    } else if (
      c12 === "" &&
      ((c10 === human && c11 === human) || (c02 === human && c22 === human))
    ) {
      $("#c12").text(computer);
      turn = 0;
    } else if (
      c20 === "" &&
      ((c21 === human && c22 === human) ||
        (c00 === human && c10 === human) ||
        (c02 === human && c11 === human))
    ) {
      $("#c20").text(computer);
      turn = 0;
    } else if (
      c21 === "" &&
      ((c20 === human && c22 === human) || (c01 === human && c11 === human))
    ) {
      $("#c21").text(computer);
      turn = 0;
    } else if (
      c22 === "" &&
      ((c20 === human && c21 === human) ||
        (c02 === human && c12 === human) ||
        (c00 === human && c11 === human))
    ) {
      $("#c22").text(computer);
      turn = 0;
    } else if (c11 === "") {
      $("#c11").text(computer);
      turn = 0;
    } else if (c00 === "" && (c02 === human || c20 === human)) {
      $("#c00").text(computer);
      turn = 0;
    } else if (c02 === "" && (c00 === human || c22 === human)) {
      $("#c02").text(computer);
      turn = 0;
    } else if (c22 === "" && (c02 === human || c20 === human)) {
      $("#c22").text(computer);
      turn = 0;
    } else if (c20 === "" && (c00 === human || c22 === human)) {
      $("#c20").text(computer);
      turn = 0;
    } else if (c00 === "") {
      $("#c00").text(computer);
      turn = 0;
    } else if (c02 === "") {
      $("#c02").text(computer);
      turn = 0;
    } else if (c20 === "") {
      $("#c20").text(computer);
      turn = 0;
    } else if (c22 === "") {
      $("#c22").text(computer);
      turn = 0;
    } else if (c01 === "") {
      $("#c01").text(computer);
      turn = 0;
    } else if (c12 === "") {
      $("#c12").text(computer);
      turn = 0;
    } else if (c21 === "") {
      $("#c21").text(computer);
      turn = 0;
    } else if (c10 === "") {
      $("#c10").text(computer);
      turn = 0;
    }
  }
  function checkSquareValues() {
    c00 = $("#c00").html();
    c01 = $("#c01").html();
    c02 = $("#c02").html();
    c10 = $("#c10").html();
    c11 = $("#c11").html();
    c12 = $("#c12").html();
    c20 = $("#c20").html();
    c21 = $("#c21").html();
    c22 = $("#c22").html();
  }

  function checkBoardState() {
    if (
      (c00 === c01 && c00 === c02 && c00 === human) ||
      (c10 === c11 && c10 === c12 && c10 === human) ||
      (c20 === c21 && c20 === c22 && c20 === human) ||
      (c00 === c10 && c00 === c20 && c00 === human) ||
      (c01 === c11 && c01 === c21 && c01 === human) ||
      (c02 === c12 && c02 === c22 && c02 === human) ||
      (c00 === c11 && c00 === c22 && c00 === human) ||
      (c02 === c11 && c02 === c20 && c02 === human)
    ) {
      $("#board").fadeOut("slow");
      $("#winner").text("You win!");
      $("#final-screen").fadeTo("slow", 1);
    } else if (
      (c00 === c01 && c00 === c02 && c00 === computer) ||
      (c10 === c11 && c10 === c12 && c10 === computer) ||
      (c20 === c21 && c20 === c22 && c20 === computer) ||
      (c00 === c10 && c00 === c20 && c00 === computer) ||
      (c01 === c11 && c01 === c21 && c01 === computer) ||
      (c02 === c12 && c02 === c22 && c02 === computer) ||
      (c00 === c11 && c00 === c22 && c00 === computer) ||
      (c02 === c11 && c02 === c20 && c02 === computer)
    ) {
      $("#board").fadeOut("slow");
      $("#winner").text("Computer wins!");
      $("#final-screen").fadeTo("slow", 1);
    } else if (c00 && c01 && c02 && c10 && c11 && c12 && c20 && c21 && c22) {
      $("#board").fadeOut("slow");
      $("#winner").text("It's a tie!");
      $("#final-screen").fadeTo("slow", 1);
    }
  }
});
