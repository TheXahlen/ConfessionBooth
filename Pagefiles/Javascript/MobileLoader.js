function Mobile() {
      var mobileon = "https://github.com/XplosiveX/ConfessionBooth/edit/main/mobileindex.html";
      var detect = window.location.href;
      if (detect == mobileon) {
        pass
      } else {
        if (screen.width <= 780) {
            document.location = "mobileindex.html";
        }
    }
}
