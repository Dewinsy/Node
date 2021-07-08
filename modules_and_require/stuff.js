let counter = function(arr){                //using function variables helps us to access the exact function we need especially if a module has many functions returning stuff. 
    return 'There are ' + arr.length + ' elements in this array.';
}

module.exports = counter;

// if module.exports is not used here, 
// nothing in the counter function can be returned 
// due to failure of export.
