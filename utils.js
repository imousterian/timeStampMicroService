var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var utils = {
  dateToFormattedStringUTC: function(date){
    var newDate = new Date(date);
    if (newDate !== 'Invalid Date' && !isNaN((newDate))){
      return monthName[newDate.getUTCMonth()] + ' ' + newDate.getUTCDate() + ', ' + newDate.getUTCFullYear();
    }
    return null;
  },
  dateStringToUTCtimestamp: function(date){
    var newDate = new Date(date);
    var result = undefined;
    if(newDate !== 'Invalid Date' && !isNaN((newDate))){
      var currentTimeZoneOffsetInHours = newDate.getTimezoneOffset() * 60;
      result = (newDate.getTime() / 1000) - currentTimeZoneOffsetInHours;
    }
    return result;
  }
}

module.exports = utils;
