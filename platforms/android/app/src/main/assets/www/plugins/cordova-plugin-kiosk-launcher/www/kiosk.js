cordova.define("cordova-plugin-kiosk-launcher.kiosk", function(require, exports, module) {
var exec = require("cordova/exec");

var Kiosk = {
  setKioskEnabled(enabled) {
    exec(null, null, "Kiosk", "setKioskEnabled", [!!enabled]);
  },

  switchLauncher: function() {
    exec(null, null, "Kiosk", "switchLauncher", []);
  },

  isInKiosk: function(callback) {
    exec(
      function(out) {
        callback(out == "true");
      },
      function(error) {
        alert("Kiosk.isInKiosk failed: " + error);
      },
      "Kiosk",
      "isInKiosk",
      []
    );
  },

  isSetAsLauncher: function(callback) {
    exec(
      function(out) {
        callback(out == "true");
      },
      function(error) {
        alert("Kiosk.isSetAsLauncher failed: " + error);
      },
      "Kiosk",
      "isSetAsLauncher",
      []
    );
  }
};

module.exports = Kiosk;

});
