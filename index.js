
/**
 *
 */

// get global context

var globalCTX = (function(){ return this; })();

// append imports function to global context

globalCTX.imports = require;

// expose native global require to components

require.native = globalCTX.require;