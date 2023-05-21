window.addEventListener("load", () => {
  loadLayout();
});

function loadLayout() {
  const allElements = document.getElementsByTagName("*");
  Array.prototype.forEach.call(allElements, (el) => {
    const element = el;
    const includePath = el.dataset.includeHtml;
    if (includePath) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = (el) => {
        if (el.target.readyState == 4 && el.target.status == 200) {
          element.outerHTML = el.target.responseText;
          hambugerMenuAction();
        }
      };
      xhttp.open("GET", includePath, true);
      xhttp.send();
    }
  });
}

function hambugerMenuAction() {
  const openBtn = document.querySelector("#hambuger_button");
  const closeBtn = document.querySelector("#close_btn");
  const list = document.querySelector("#hambuger_wrap");
  openBtn.addEventListener("click", () => {
    list.style.display = "block";
    list.animate(
      {
        right: ["-55%", "0"],
      },
      {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both",
      },
    );
  });
  closeBtn.addEventListener("click", () => {
    list.animate(
      {
        right: ["0", "-55%"],
      },
      {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both",
        display: "none",
      },
    );
  });
}
