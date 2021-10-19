const n_slider = 4;
var width = 1000;
var height = 450;
const slider_width = width * n_slider;
const animation_speed = 300;

let index = 0;
let slide = function (change) {
  index += change;

  if (index < 0) index = n_slider - 1;
  else if (index > n_slider - 1) index = 0;

  if (screen.width <= 1000) {
    width = 500;
    height = 200;
  } else {
    width = 1000;
    height = 450;
  }

  $(".images").animate(
    {
      marginLeft: -width * index,
    },
    animation_speed
  );
};

$("#btnLeft").click(function () {
  console.log("left");
  slide(-1);
});

$("#btnRight").click(function () {
  console.log("right");
  slide(1);
});