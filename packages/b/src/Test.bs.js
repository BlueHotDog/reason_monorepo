'use strict';


function hi(a) {
  return function (param) {
    console.log(a, param);
    
  };
}

exports.hi = hi;
/* No side effect */
