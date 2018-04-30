(function(exports){

  exports.show = function() {
    $("#settings").show();

    $("#settingsbutton").hide();
    $("#headings").hide();
    $("#cities").hide();
    $("#timeformatbutton").hide()

    $(document).addClass("settingsvisible");

    window.scrollTo(0, 0);
  };


  exports.hide = function() {
    $("#settings").hide();

    $("#settingsbutton").show();
    $("#headings").show();
    $("#cities").show();
    $("#timeformatbutton").show()

    $(document).removeClass("settingsvisible");
    window.scrollTo(0, 0);
  };

  exports.filter = function(filterInputValue) {
    var allAddButtons = document.querySelectorAll('.addbutton');
    for (var i = 0; i < allAddButtons.length; i++) {
      if (allAddButtons[i].textContent.toLowerCase().indexOf(filterInputValue.toLowerCase().trim()) >= 0) {
        allAddButtons[i].classList.remove("is-hidden");
      } else {
        allAddButtons[i].classList.add("is-hidden");
      }
    }

    var clearButton = document.getElementById("clearbutton");

    if (filterInputValue === "") {
      clearButton.classList.remove("is-active");
    } else {
      clearButton.classList.add("is-active");
      clearButton.onclick = function clearSearchInput() {
        document.getElementById("filter").value = "";
        window.scrollTo(0, 0);
      };
    }

  }

})(this.Settings = {})


$('#settingsbutton').on('click', function() {
  Settings.show();
});

$('#headings').on('click', function() {
  Settings.show();
});

Settings.hide();
