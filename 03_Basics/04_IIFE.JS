//Immediate Invoked Function Expression (IFFE)
//global scope ke pollution, jaise ki uske varaiable ya or kuch declare kiya ho uske pollution se bachane ke liye IIFE use karte hai
//Jo function immediately execute ho jaye

(function chai(){
    //Named IIFE
    console.log(`DB Connected.`)
})();                        //here ; is very important as it shows that the function is completed/over

(()=>{                      //if we doesnt gave ; to the above function then it considered continuing with this fucntion as well
    //Normal IIFE
    console.log("DB Connected2.")
})();


((name)=>{                      //arugemt
    //Normal IIFE
    console.log(`DB Connected2. ${name}`)
})("Manish")              // Parameter

// (function definition)(Execution call) -> syntax for IFFE