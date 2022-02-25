const receivesAFunction = callback => callback();

const returnsANamedFunction = () => {
    return function namedFn(){
    console.log("I did it");
}
}

const returnsAnAnonymousFunction = () => function(){
    console.log("Anonymous");
}
