/** @format */

$(document).ready(function () {
  $("#jquery-btn").click(function () {
    $(".jq-p1").hide(2000);
  });
  $("#jquery-btn").dblclick(function () {
    $(".jq-p1").show("slow");
  });
  $(".jq-p2").click(function () {
    $("#jquery-btn").toggle("slow");
    $(this).css("width", "400px");
  });

  $("#jq-input1").focus(function () {
    $(this).css("background-color", "red");
  });
  $("#jq-input1").blur(function () {
    $(this).css("background-color", "green");
    $(this).css("border-radius", "10px");
  });

  //   On Method
  $(".jq-p3").on({
    mouseenter: function () {
      $(this).css("color", "blue");
    },
    mouseleave: function () {
      $(this).css("background-color", "pink");
    },
    click: function () {
      $(this).css("background-color", "orange");
    },
  });

  //   FadeIn, FadeOut, FadeToggle, FadeTo
  $("#jq-btn2").click(function () {
    $(".jq-p1").fadeToggle();
    $(".jq-p2").fadeToggle("slow");
    $(".jq-p3").fadeToggle(3000);
    $(".jq-p4").fadeTo(3000, 0.5);
  });

  //   Sliding
  $("#jq-btn3").click(function () {
    $(".jq-p5").slideToggle("fast");
  });

  //   Animate
  $("#jq-btn4").click(function () {
    var div = $(".jq-div1");
    div.animate({
      left: "450px",
      width: "150px",
      height: "100px",
      opacity: "0.5",
    });
    div.animate({
      top: "100px",
      width: "300px",
      height: "300px",
      opacity: "1",
    });
    div.animate({
      right: "450px",
      width: "300px",
      height: "300px",
      opacity: "0.5",
    });
    div.animate({
      left: "0px",
      bottom: "100px",
      width: "150px",
      height: "100px",
      opacity: "1",
    });
    div.animate({
      top: "0px",
      width: "300px",
      height: "300px",
      opacity: "0.5",
    });
  });

  //   Stop Animation
  $("#jq-btn5").click(function () {
    $(".jq-div1").stop();
  });

  //   Callback && Chaining
  $("#jq-btn6").click(function () {
    $(".jq-div2").hide("slow", function () {
      $(".jq-div1")
        .css("background-color", "orange")
        .slideUp("slow")
        .slideDown("slow");
    });
    $(".jq-div2").show("slow").css("background-color", "green");
  });

  // text() and html() methods:
  $("#jq-btn7").click(function () {
    alert("HTML " + $(".jq-p6").text());
    alert("Value: " + $("#jq-input1").val());
    alert("Attribute: " + $(".sm-li-item a:last").attr("href"));
  });

  //   set method
  $("#jq-btn8").click(function () {
    // $(".jq-p7").text("This is a changed text");
    $(".jq-p7").html(function (i, origText) {
      return "Old text " + origText + "New Text: Hello! (index: " + i + ")";
    });
  });
});
