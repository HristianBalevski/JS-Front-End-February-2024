const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.')
    }else {
        reject('That item is sold out.')
    }
}

const myFirstPromise = new Promise(myExecutor);

function orderSunglasses() {
    return myFirstPromise
}

const orderPromise = orderSunglasses()
console.log(orderPromise)