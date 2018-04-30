(function(exports){

  exports.isEnabled = function() {
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;
    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
      document.cookie="testcookie";
      cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (cookieEnabled);

  }

  exports.set = function(value) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 365);
    var c_value = escape(value) + "; expires=" + exdate.toUTCString();
    document.cookie= "timeformat=" + c_value;

    return value;
  }

  exports.get = function() {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++) {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");

      if (x=="timeformat") {
       if(y !== undefined){
         return unescape(y)
       }
      }
    }
    return "12hr";
  }

  exports.change = function() {
    if (Cookie.get() == "12hr" || Cookie.get() === undefined) {
      Cookie.set("24hr");
    } else {
      Cookie.set("12hr");
    }
  };

})(this.Cookie = { })

if (Cookie.isEnabled() === false) {
  alert("Homeslice uses cookies to remember which cities you compare. Please turn on cookies if you want it to work.");
}
