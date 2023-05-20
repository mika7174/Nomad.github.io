window.addEventListener("load", () => {
  var allElements = document.getElementsByTagName("*");
  console.log(allElements);
  Array.prototype.forEach.call(allElements, (el) => {
    var includePath = el.dataset.includeHtml;
    console.log(el.dataset.includeHtml);
    if (includePath) {
      var xhttp = new XMLHttpRequest();
      console.log(xhttp);
      xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
          console.log("success");
          el.outerHTML = this.responseText;
        }
      };
      xhttp.open("GET", includePath, true);
      xhttp.send();
    }
  });
});
