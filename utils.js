const Time = require("china-time");

function getCurrentTime() {
  var date = new Time();
  return date.getHours();
}

function getCurrentType() {
  var hours = getCurrentTime();
  if (hours >= 0 && hours < 11) {
    return { templateid: "clockSign1", customerAppTypeRuleId: 115 };
  } else if (hours >= 11 && hours < 17) {
    return { templateid: "clockSign2", customerAppTypeRuleId: 116 };
  } else {
    return { templateid: "clockSign3", customerAppTypeRuleId: 117 };
  }
}

module.exports = {
  getCurrentType,
};
