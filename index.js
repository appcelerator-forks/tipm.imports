
/**
 *
 */

// get global context

var globalCTX = (function(){ return this; })();

var imports = module.exports = {};

var _aliase = {};

/**
 * [aliase description]
 * @param  {[type]} name   [description]
 * @param  {[type]} aliase [description]
 * @return {[type]}        [description]
 */

imports.aliase = function(name, aliase){
  if ('string' === typeof name){
    _aliase[name] = aliase;
    return;
  }

  for (var key in name){
    _aliase[key] = name[key];
  }

};

/**
 * [preload description]
 * @return {[type]} [description]
 */

imports.preload = function(){
  var args = Array.prototype.slice.call(arguments,0);
  for (var i = 0; i < args.length; i++){
    require(args[i]);
  }
};


// append imports function to global context

globalCTX.imports = function(name){
  return require(_aliase[name] || name);
};

// expose native global require to components

require.native = globalCTX.require;
