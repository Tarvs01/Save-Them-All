import $ from "jquery";

export function butterfly() {
  let direction = ["ltr", "rtl"];
  let random = Math.floor(Math.random() * direction.length);

  let $butafly = $("<div>");
  $butafly.click(butterfly);
  let $butaimg = $("<img>", {
    src: "../images/monarch.gif",
    alt: "monarch-butterfly",
  });

  $butafly.css({
    position: "fixed",
  });

  $butaimg.css({ width: "20vw" });

  $butafly.append($butaimg);

  $(".animal-words-cont").append($butafly);

  switch (direction[random]) {
    case "ltr":
      {
        let down = Math.random() * 50 - 10;
        let up = Math.random() * 50 + 50;

        $butafly.css({
          left: `${down}vw`,
          bottom: "-20vw",
        });

        $($butafly).animate(
          {
            left: `${up}vw`,
            bottom: `${100}vh`,
          },
          9000,
          function () {
            $(this).remove();
          }
        );
      }
      break;

    case "rtl":
      {
        let down = Math.random() * 50 + 50;
        let up = Math.random() * 100 - 50;

        $butafly.css({
          left: `${down}vw`,
          bottom: "-20vw",
          transform: "rotate(-90deg)",
        });

        $($butafly).animate(
          {
            left: `${up}vw`,
            bottom: `${100}vh`,
          },
          9000,
          function () {
            $(this).remove();
          }
        );
      }
      break;
  }
  return 0;
}
