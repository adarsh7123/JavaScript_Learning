// Immediately Invoked Function Expressions (IIFE)

(function(){
    //named IIFE
    console.log(`db connected`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')