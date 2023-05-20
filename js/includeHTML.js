window.addEventListener("load", () => {
  const allElements = document.getElementsByTagName("*");
  Array.prototype.forEach.call(allElements, (el) => {
    const element = el;
    const includePath = el.dataset.includeHtml;
    if (includePath) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = (el) => {
        if (el.target.readyState == 4 && el.target.status == 200) {
          element.outerHTML = el.target.responseText;
        }
      };
      xhttp.open("GET", includePath, true);
      xhttp.send();
    }
  });
});
