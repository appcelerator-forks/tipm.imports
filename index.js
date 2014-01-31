
/**
 * [exports description]
 * @param  {[type]} builder [description]
 * @return {[type]}         [description]
 */

module.exports = function(builder) {
  var main = builder.basename;
  builder.append("(function(){ this.imports = require; })()\n");
};