/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res =new Array(arr.length);
    for (const i in arr)
    {
        res[i]=fn(arr[i],Number(i));
    }
        return res;
     
};

// 2nd way to do this which is not allowed because using map function is not allowed here.
// return arr.map(fn);