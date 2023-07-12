/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    const aux = init;
    let aux2 = init;
    return {
        increment: () => {
            return ++aux2;
        },
        decrement: () => {
             return --aux2;
        },
        reset: () => {
            aux2 = aux;
            return aux;
        },
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */