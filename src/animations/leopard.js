import $ from "jquery";

let size = window.innerWidth;

window.addEventListener("resize", function () {
  size = window.innerWidth;
});

export function leopard() {
  let audio = new Audio("../sounds/leopard-sound.mp3");
  let $leo = $("<div>");
  let $leoImg = $("<img>", {
    src: "../images/leopard-walking.gif",
    alt: "walking leopard",
  });

  $leo.css({
    position: "fixed",
    bottom: "-4vw",
    left: "-20vw",
  });

  $leoImg.css({
    width: "20vw",
  });

  $leoImg.click(function () {
    audio.play();
  });

  $leo.animate(
    {
      left: "100vw",
    },
    size * 20,
    function () {
      $(this).remove();
    }
  );

  $leo.append($leoImg);
  $(".animal-words-cont").append($leo);
}

/* {
  animal.name === "Amur Leopard" ? (
    <div
      className="walking-animation"
      style={{
        animation: ` walking ${size / 60}s linear 0s infinite forwards`,
      }}
    >
      <img src="../images/leopard-walking.gif" alt="walking leopard" />
    </div>
  ) : null;
} */
