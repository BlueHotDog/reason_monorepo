'use strict';


function hi(a, c) {
  return function (param) {
    console.log(a, param);
    
  };
}

exports.hi = hi;
/* No side effect */
