let context = document.querySelector("canvas").getContext("2d");
canvas.width = 1350; //window.innerWidth;
canvas.height = 350; //window.innerHeight;
var offsetX = canvas.offsetLeft;
var offsetY = canvas.offsetTop;
var cx = canvas.width * 0.1;
var cy = canvas.height * 0.24;

class Circle {
  constructor(xpoint, ypoint, radius, color) {
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.radius = radius;
    this.color = color;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();

    context.closePath();
    //context.stroke();
  }
}

const circle_radius = 6;
const Plateia = [];
const a = 0.85;
var id = 1;
for (let j = 1; j < 11; j++) {
  for (let i = 0; i < 50; i++) {
    Plateia.push([
      new Circle(
        cx * 0.2 + cx * 0.11 * i,
        cy * 0.2 * j * a,
        circle_radius,
        "#cb50fc"
      ),
      id,
      false,
    ]);
    id++;
    Plateia[Plateia.length - 1][0].draw(context);
  }
}

for (let j = 1; j < 6; j++) {
  for (let i = 0; i < 50; i++) {
    Plateia.push([
      new Circle(
        cx * 0.2 + cx * 0.11 * i,
        160 + cy * 0.5 * j * 0.35,
        circle_radius,
        "#55acfd"
      ),
      id,
      false,
    ]);
    id++;
    Plateia[Plateia.length - 1][0].draw(context);
  }
}

//

var Seat_array = [];
var thesi = document.getElementById("thesi");

//

function handleEvent2(e) {
  var evt = e ? e : window.event;
  clickX = evt.clientX - offsetX;
  clickY = evt.clientY - offsetY;
  for (let i = 0; i <= Plateia.length; i++) {
    var dx = Plateia[i][0].xpoint - clickX;
    var dy = Plateia[i][0].ypoint - clickY;
    //
    if (dx * dx + dy * dy <= circle_radius * circle_radius) {
      selectSeat(Plateia[i]);

      thesi.value = Seat_array;
    }
  }
}

function selectSeat(circle_object) {
  if (circle_object[2] == false) {
    context.beginPath();
    context.arc(
      circle_object[0].xpoint,
      circle_object[0].ypoint,
      6,
      0,
      Math.PI * 2,
      false
    );
    context.fillStyle = "red";
    context.fill();

    context.closePath();
    circle_object[2] = true;
    Seat_array.push(circle_object[1]);
    console.log(Seat_array);
    //context.stroke();
  } else if (circle_object[2] == true) {
    //if (circle_object[1]<=500){

    //}
    context.beginPath();
    context.arc(
      circle_object[0].xpoint,
      circle_object[0].ypoint,
      6,
      0,
      Math.PI * 2,
      false
    );
    if (circle_object[1] <= 500) {
      context.fillStyle = "#cb50fc";
    } else {
      context.fillStyle = "#55acfd";
    }

    context.fill();

    context.closePath();
    circle_object[2] = false;
    //context.stroke();
    for (var i = Seat_array.length - 1; i >= 0; i--) {
      if (Seat_array[i] == circle_object[1]) {
        Seat_array.splice(i, 1);
        console.log(Seat_array);
      }
    }
  }
}

//
canvas.addEventListener("click", handleEvent2);
