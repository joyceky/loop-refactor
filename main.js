'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  // sum: (arr, base) => {
  //   let sum = base;
  //   for (var i = 0; i < arr.length; i++){
  //     sum += arr[i];
  //   }
  //   return sum;
  // },

  sum: (arr, base) => {
    return arr.reduce((curr, prev) => {
      return curr + prev;
    }, 0) + base;
  },

  // someObjsContainProp: (arr, prop) => {
  //   for(var i = 0; i < arr.length; i++){
  //     if(arr[i].hasOwnProperty(prop)){
  //       return true;
  //     }
  //   }
  //   return false;
  // },

  someObjsContainProp: (arr, prop) => {
    return arr.some((element) => { if (element.hasOwnProperty(prop)) return true;
    })
  },

  // convertNameArrayToObject: (arr) => {
  //   let nameObj = [];
  //   for(var i = 0; i < arr.length; i++){
  //     let obj = {};
  //     obj.first = arr[i][0];
  //     obj.last = arr[i][1];
  //     nameObj.push(obj);
  //   }
  //   return nameObj;
  // },

  convertNameArrayToObject: (arr) => {
    return arr.map((element) => {
      let obj = {};
      obj.first = element[0];
      obj.last = element[1];
      return obj;
    })
  },

  // objContainsProp: (arr, prop) => {
  //   for (var i = 0; i < arr.length; i++){
  //     if(!arr[i].hasOwnProperty(prop)){
  //       return false;
  //     }
  //   }
  //   return true;
  // },

  objContainsProp: (arr, prop) => {
    return arr.every((element) => { if (element.hasOwnProperty(prop)) return true;
    })
  },

  // stringMatch: (arr, str) => {
  //   let matches = [];
  //   for(var i = 0; i < arr.length; i++){
  //     if (arr[i].includes(str)){
  //       matches.push(arr[i]);
  //     }
  //   }
  //   return matches;
  // },

  stringMatch: (arr, str) => {
    return arr.filter((element) => {
      return element.includes(str)
    });
  }
};
