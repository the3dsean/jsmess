if(!window.console){ window.console = {log: function(){} }; }
var JSMESS = JSMESS || {};
JSMESS.running = false;
JSMESS.ready(function() { console.log("JSMESS is now running"); });
JSMESS.MESS_BUILD_VERSION = "JSMESS_MESS_BUILD_VERSION";
JSMESS.EMCC_VERSION = "JSMESS_EMCC_VERSION";
JSMESS.EMCC_FLAGS = "JSMESS_EMCC_FLAGS";
JSMESS.MESS_FLAGS = "JSMESS_MESS_FLAGS";
console.log("MESS BUILD_VERSION == " + JSMESS.MESS_BUILD_VERSION);
console.log("EMCC VERSION == " + JSMESS.EMCC_VERSION);
console.log("EMCC_FLAGS == " + JSMESS.EMCC_FLAGS);
console.log("MESS_FLAGS == " + JSMESS.MESS_FLAGS);
