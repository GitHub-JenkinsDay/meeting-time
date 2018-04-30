// Setup
var interval                = 500;
var hoursInTheFuture        = 24 * 7;
                            // Regex to match if a time difference is plus or minus 30min.
                            // E.g. Adelaide is +0930.
var plusOrMinusThirty       = /(\+|\-)\d{2}3\d{1}/g;
                            // Negative lookahead of the above regex.
                            // So you can say "doesn't match".
var notPlusOrMinusThirty    = /^(?!(\+|\-)\d{2}3\d{1})/g;
var urlString               = Url.get();
var selectedIndex;
var cities;

function initializeList() {
  cities = {};
  for (var city in Cities.options) {
    var currentTime                  = moment().tz(Cities.options[city][1]).format(TimeFormats.TimeForList);
    var currentGmtOffset             = moment().tz(Cities.options[city][1]).format('Z');

    $('#settings').append("<div class='addbutton' data-city='" + city + "'>" +
        Cities.options[city][0] + "<span>"+currentTime+"</span><span>"+
        currentGmtOffset+"</span></div>");

    urlCities = Url.get().split("/");
    if (urlCities.indexOf(city) > -1) {
      cities[city] = [
        Cities.options[city][0],
        Cities.options[city][1]
          ];
      $("*[data-city='"+ city +"']").addClass('is-active');
    }
  }
};

function loadCities(){
  $('#cities').html("");
  $('#headings').html("");
  // For each city
  for (var city in cities) {
    console.log(city);

    // Generate markup for each city
    var cityEl        = document.createElement("div");
    var headingEl     = document.createElement("h2");

    // Nice name for city, e.g. 'San Francisco'
    var cityName      = document.createTextNode(cities[city][0]);

    // The name in the URL, e.g. 'sanfrancisco'
    var cityShortName = city;

    // Append generated elements and add classes
    Cities.el.appendChild(cityEl).classList.add("city", cityShortName);
    document.getElementById("headings").appendChild(headingEl).classList.add("heading");
    headingEl.appendChild(cityName);

    // Append div.hour with data-hour="cityshortname" X times.
    // Where X is the number of hours in the future.
    // `hoursInTheFuture` is set at the top of this script.
    for (var i = 0; i < hoursInTheFuture; i++) {
      var hourEl     = document.createElement("div");
      cityEl.appendChild(hourEl).classList.add("hour");
      hourEl.setAttribute("data-hour", cityShortName);
    }
  }
}

function printHour(city, tzName, hourNode, index) {
  // Set `currentTime` to the correct time with Moment Timezone.
  var currentTime = moment().tz(tzName);

  // Get the GMT offset and remove the : from +09:30
  var timeDiff = moment().tz(tzName).format('Z').replace(/:/, "");
  var format;

  if (index === 0) {
    format = TimeFormats.CurrentTime;
    hourNode.classList.add("current");
  } else if (timeDiff.match(plusOrMinusThirty) && index !== 0){
    format = TimeFormats.TimePlusThirty;
    currentTime = currentTime.add('hours', index);
    currentTime = currentTime.subtract('hours', 0.5);
  } else {
    format = TimeFormats.Time;
    currentTime = currentTime.add('hours', index);
  }

  if (!hourNode.classList.contains("current")) {
    hourNode.onclick = function toggleClassOnSelectedHours() {
      selectedIndex = index;
    };
  }

  if (index == selectedIndex) {
    hourNode.classList.add("selectedhourforsharing");
    hourNode.onclick = function clearSelection() { selectedIndex = undefined; };
  } else {
    hourNode.classList.remove("selectedhourforsharing");
  }

  // If timezone doesn't have a half hour difference,
  // And it's midnight,
  // and it isn't the first item (current time).
  // Set the new time format.
  if (timeDiff.match(notPlusOrMinusThirty) && currentTime.format('HH') == '00' && index !== 0) {
    format = TimeFormats.NewDay;
  }

  // If timezone doesn't have a half hour difference,
  // And it's midnight,
  // Add a class for styling.
  if (timeDiff.match(notPlusOrMinusThirty) && currentTime.format('HH') == '00') {
    hourNode.classList.add("daystart");
  }

  // If timezone doesn't have a half hour difference,
  // And it's midday,
  // and it isn't the first item (current time).
  // Set the new time format.
  if (timeDiff.match(notPlusOrMinusThirty) && currentTime.format('HH') == '12' && index !== 0) {
    format = TimeFormats.Midday;
  }

  if (currentTime.format('ha') == "12am") {
    hourNode.classList.add("sleep");
  }

  if (currentTime.format('ha') == "1am") {
    hourNode.classList.add("sleep");
    hourNode.classList.remove("daystart");
  }

  if (currentTime.format('ha') == "2am") {
    hourNode.classList.add("sleep");
  }

  if (currentTime.format('ha') == "3am") {
    hourNode.classList.add("sleep");
  }

  if (currentTime.format('ha') == "4am") {
    hourNode.classList.add("sleep");
  }

  if (currentTime.format('ha') == "5am") {
    hourNode.classList.add("sleep");
  }

  if (currentTime.format('ha') == "6am") {
    hourNode.classList.add("sleep");
  }

  if (currentTime.format('ha') == "7am") {
    hourNode.classList.add("outsidebusiness");
    hourNode.classList.remove("sleep");
  }

  if (currentTime.format('ha') == "8am") {
    hourNode.classList.add("outsidebusiness");
  }

  if (currentTime.format('ha') == "9am") {
    hourNode.classList.remove("outsidebusiness");
  }

  if (currentTime.format('ha') == "6pm") {
    hourNode.classList.add("outsidebusiness");
  }

  if (currentTime.format('ha') == "7pm") {
    hourNode.classList.add("outsidebusiness");
  }

  if (currentTime.format('ha') == "8pm") {
    hourNode.classList.add("outsidebusiness");
  }

  if (currentTime.format('ha') == "9pm") {
    hourNode.classList.add("outsidebusiness");
  }

  if (currentTime.format('ha') == "10pm") {
    hourNode.classList.add("sleep");
    hourNode.classList.remove("outsidebusiness");
    hourNode.classList.remove("evening");
  }

  if (currentTime.format('ha') == "11pm") {
    hourNode.classList.add("sleep");
  }

  if (currentTime.format('HH') >= 18 && currentTime.format('HH') < 22) {
    hourNode.classList.add("evening");
  }

  if (currentTime.format('ddd') == "Sat") {
    hourNode.classList.add("weekend");
  }

  if (currentTime.format('ddd') == "Sun") {
    hourNode.classList.add("weekend");
  }

  if (currentTime.format('ddd') == "Mon") {
    hourNode.classList.remove("weekend");
  }

  // Actually add the time to the document.
  hourNode.innerHTML = currentTime.format(format);

}


// Generate content and regenerate on a timer.
function updateCities(){

  // For each city
  for (var city in cities) {

    // The name in the URL, e.g. 'sanfrancisco'
    var cityShortName = city;

    // Time difference, offset from GMT. e.g. '+1000'
    var tzName        = cities[city][1];

    // Find elements with the matching data attribute.
    // Create an array with all these elements called `hours`
    var hours = document.querySelectorAll('[data-hour=' + cityShortName +']');

    // For every element in `hours` do...
    $.each(hours, function( index, value ) {
      printHour(city, tzName, value, index);
    });
  }
}

loadSelectedCities = function(){
  TimeFormats.set(Cookie.get());
  loadCities();
  updateCities();
  setInterval(updateCities, interval);
};

initializeList();
loadSelectedCities();

$('.addbutton').on('click', function(e) {
  urlCities = Url.get().split("/");
  city = $(this).data('city');
  if (urlCities.indexOf(city) > -1) {
    Url.removeCity(city);
    $(this).removeClass("is-active");
  } else {
    Url.addCity(city);
    $(this).addClass("is-active");
  }
});

$('.savebutton').on('click', function(e) {
  $("#filter").val('');
  Settings.hide();
  initializeList();
  loadSelectedCities();
});

$('#filter').on('input', function() {
  Settings.filter($('#filter').val())
});

$(TimeFormats.button).on("click", function() {
  Cookie.change();
  TimeFormats.set(Cookie.get());
  updateCities();
});

window.onpopstate = function(event) {
  initializeList();
  loadSelectedCities();
};
