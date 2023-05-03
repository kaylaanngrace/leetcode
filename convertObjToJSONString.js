/* 
Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().

Please solve it without using the built-in JSON.stringify method.
*/

// so, create a function that does what JSON.stringify method does "under the hood" using recursion
let jsonStringify = function(obj) {
    // handle strings, enclose in double quotes
    if (typeof obj === "string") {
      return `"${obj}"`;
    }
  
    // handle numbers and booleans, return the string representation
    if (typeof obj === "number" || typeof obj === "boolean" || (typeof obj === "object" && obj === null)) {
      return `${obj}`;
    }
  
    // handle arrays, loop over every single element
      if(Array.isArray(obj)) {
          let arr = [];
          for (let i = 0; i < obj.length; i++) {
              let res = jsonStringify(obj[i])
              arr.push(res);
          }
          return `[${arr}]`
      }
      // handle obj, loop over keys and values. 
      let object = [];
      for (let key in obj) {
          let res = `"${key}":${jsonStringify(obj[key])}`
          object.push(res)
      }
  
      return `{${object}}`
  }
  
  
  
  console.log((jsonStringify({"a":"str","b":-12,"c":true,"d":null})))
  console.log('-----------')
  console.log(jsonStringify({"y":1,"x":2}))
  console.log('-----------')
  console.log(jsonStringify({"key":{"a":1,"b":[{},null,"Hello"]}}))
  console.log('-----------')
  console.log(jsonStringify(true))




