

/* $(document).ready(function () {

    let options = {
        strings: [
            "Hello World",
            "I'm Extibax",
            "Back-End Developer"
        ],
        typeSpeed: 70,
        backDelay: 200,
        loop: true
    }

    var typed = new Typed(".type", options);

}); */

$(document).ready(function () {
    // initialization of text animation (typing)
    var typed = new Typed(".type", {
      strings: ["¡Hello World!", "¡Hello World!", "I'm Extibax", "Back-End Developer"],
      typeSpeed: 60,
      loop: true,
      backSpeed: 25,
      backDelay: 1500
    });
  });