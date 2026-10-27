/* Live site previews: real sites in scaled, non-interactive iframes (loaded after the page is ready). */
(function () {
  var BASE = 1280;
  var boxes = document.querySelectorAll(".live-frame");
  if (!boxes.length) return;
  function fit(b) {
    var f = b.querySelector("iframe");
    if (f && b.clientWidth) f.style.transform = "scale(" + b.clientWidth / BASE + ")";
  }
  boxes.forEach(fit);
  window.addEventListener("resize", function () { boxes.forEach(fit); });
  window.addEventListener("load", function () {
    boxes.forEach(fit);
    setTimeout(function () {
      boxes.forEach(function (b) {
        var f = b.querySelector("iframe");
        if (f && !f.src) f.src = b.getAttribute("data-src");
      });
    }, 1500);
  });
})();
