(function(exports){

  exports.set = function(value) {
    history.pushState({}, document.title, "#" + value);
  };

  exports.get = function() {
    return window.location.hash.substring(1);
  };

  exports.removeCity = function(city) {
    var regex = city + "\/";
    urlString = Url.get().replace(new RegExp(regex,"g"), "");
    Url.set(urlString);
    var urlCities = Url.get().split("/");
  };

  exports.addCity = function(city) {
    urlString = Url.get();
    urlString += city + "/";
    Url.set(urlString);
    var urlCities = Url.get().split("/");
  };

  exports.defaultCities = "alderaan/hoth/";
  

})(this.Url = {})

if (!Url.get()) {
  Url.set(Url.defaultCities);
}

var urlCities = Url.get().split("/");
