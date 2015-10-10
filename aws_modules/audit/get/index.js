/**
 * AWS Module: Action: Modularized Code
 */

console.log('Loading function');


// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
  return cb(null, action());
};

// Your Code
var action = function() {

  return {message: 'Your JAWS lambda executed successfully!'};


};
