import $ from "jquery";

let size = window.innerWidth;
window.addEventListener("resize", () => {
  size = window.innerWidth;
});

let bees = 0;

export function bumblebee() {
  while (bees < 10) {
    ++bees;
    bumblebee();
  }
  $("#source").attr("src", "../sounds/bees-sound.mp3");
  let $bee = $("<div>");
  let $beeImg = $("<img>", { src: "../images/bee1.gif", alt: "bumblebee" });

  $bee.css({ position: "fixed", top: "50vw", left: "50vw" });
  $beeImg.css({ width: "5vh" });

  $bee.append($beeImg);

  $(".animal-words-cont").append($bee);

  beeCaller($bee, $beeImg);
}

async function beeCaller(bee, beeImg) {
  while (1) {
    beeAnimation(bee, beeImg);
    await delay(1000);
  }
}

async function beeAnimation(bee, beeImg) {
  let directions = ["tl", "tr", "bl", "br"];
  let random = Math.trunc(Math.random() * directions.length);
  let time = 1000;

  let theLeft = parseInt(bee.css("left").split("p")[0]);
  let theTop = parseInt(bee.css("top").split("p")[0]);

  if (theLeft < 0) {
    if (theTop < 0) {
      br();
      return;
    } else if (theTop > window.innerHeight) {
      tr();
      return;
    }
    tr();
    return;
  } else if (theLeft > size) {
    if (theTop < 0) {
      bl();
      return;
    } else if (theTop > window.innerHeight) {
      tl();
      return;
    }
  } else if (theTop < 0) {
    bl();
    return;
  } else if (theTop > window.innerHeight) {
    tr();
    return;
  }

  switch (directions[random]) {
    case "tl":
      tl();
      break;

    case "tr":
      tr();
      break;

    case "br":
      br();
      break;

    case "bl":
      bl();
      break;

    default:
      break;
  }

  async function tl() {
    let degree = Math.random() * 90 + 270;
    let deg = 0;
    rotate();
    async function rotate() {
      beeImg.css({ WebkitTransform: "rotate(" + deg + "deg)" });
      beeImg.css({ "-moz-transform": "rotate(" + deg + "deg)" });
      if (deg < degree) {
        await delay(1);
        deg += 5;
        rotate();
      }
    }

    let top = Math.random() * 50;

    bee.animate(
      {
        top: `-=${top}vw`,
        left: `-=${top}vw`,
      },
      time
    );
    await delay(time);
  }

  async function tr() {
    let degree = Math.random() * 90;
    let deg = 0;
    rotate();
    async function rotate() {
      beeImg.css({ WebkitTransform: "rotate(" + deg + "deg)" });
      beeImg.css({ "-moz-transform": "rotate(" + deg + "deg)" });
      if (deg < degree) {
        await delay(1);
        deg += 5;
        rotate();
      }
    }

    let top = Math.random() * 50;

    bee.animate(
      {
        top: `-=${top}vw`,
        left: `+=${top}vw`,
      },
      time
    );
    await delay(time);
  }

  async function br() {
    let degree = Math.random() * 90 + 90;
    let deg = 0;
    rotate();
    async function rotate() {
      beeImg.css({ WebkitTransform: "rotate(" + deg + "deg)" });
      beeImg.css({ "-moz-transform": "rotate(" + deg + "deg)" });
      if (deg < degree) {
        await delay(1);
        deg += 5;
        rotate();
      }
    }

    let top = Math.random() * 50;

    bee.animate(
      {
        top: `+=${top}vw`,
        left: `+=${top}vw`,
      },
      time
    );
    await delay(time);
  }

  async function bl() {
    let degree = Math.random() * 90 + 180;
    let deg = 0;
    rotate();
    async function rotate() {
      beeImg.css({ WebkitTransform: "rotate(" + deg + "deg)" });
      beeImg.css({ "-moz-transform": "rotate(" + deg + "deg)" });
      if (deg < degree) {
        await delay(1);
        deg += 5;
        rotate();
      }
    }

    let top = Math.random() * 50;

    bee.animate(
      {
        top: `+=${top}vw`,
        left: `-=${top}vw`,
      },
      time
    );
    await delay(time);
  }
  return 0;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
