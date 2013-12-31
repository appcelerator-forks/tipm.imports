
/**
 *
 */

// get global context

var globalCTX = (function(){ return this; })();

var imports = module.exports = {};

var _aliase = {};

imports.aliase = function(name, aliase){
  if ('string' === instanceof name){
    _aliase[name] = aliase;
    return;
  }

  for (var key in name){
    _aliase[key] = name[key];
  }

};


// append imports function to global context

globalCTX.imports = function(name){
  return require(_aliase[name] || name);
};

// expose native global require to components

require.native = globalCTX.require;
