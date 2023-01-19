function receivesAFunction(callBack){
    callBack()
}

function returnsANamedFunction() {
    function name(){
        console.log ('Hey')
    }
    return name
}

function returnsAnAnonymousFunction() {
    return function (){
        console.log ('H')
    }
}