(function(exports){
  exports.button = "#timeformatbutton";

  exports.set = function(timeformat) {
    if (timeformat == "12hr") {
      $(TimeFormats.button).html("Use 24hr");
      TimeFormats.CurrentTime            = 'ddd h:mma';
      TimeFormats.Time                   = 'ddd ha';
      TimeFormats.NewDay                 = 'ddd Do MMM';
      TimeFormats.TimePlusThirty         = 'ddd h:[30]a';
      TimeFormats.Midday                 = 'ddd [Midday]';
      TimeFormats.TimeForList            = 'h:mma';
    } else {
      $(TimeFormats.button).html("Use 12hr");
      TimeFormats.CurrentTime            = 'ddd HH:mm';
      TimeFormats.Time                   = 'ddd HH[:00]';
      TimeFormats.NewDay                 = 'ddd DD/MM';
      TimeFormats.TimePlusThirty         = 'ddd HH[:30]';
      TimeFormats.Midday                 = 'ddd HH[:00]';
      TimeFormats.TimeForList            = 'HH:mm';
    }
  };

})(this.TimeFormats = {})

TimeFormats.set();
