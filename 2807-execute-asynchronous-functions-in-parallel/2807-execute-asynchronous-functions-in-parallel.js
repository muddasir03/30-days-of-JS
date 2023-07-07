/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve,reject)=>{
        let answer=[],j=functions.length;
        functions.forEach((func,i)=>{
            func().then((res)=>{
                (answer[i]=res,--j===0 && resolve(answer))
            })
            .catch(reject)
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */