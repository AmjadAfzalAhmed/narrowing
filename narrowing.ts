let id: string | number; // here declared a variable with type annotation of either a number or a string

id = 19;// here initialized the variable id by assigning a value i.e. number 19
id.toFixed(2)// following the abvoe line assignment the variable id has been narrowed down to type number that is why
            // it accepted the .toFixed() mehod which is only applicable to type number.

id = "Amjad"; // here reinitialized the variable id by assigning a new value i.e. a string
id.toUpperCase() //being assigned with a string value, now the variable id has been narrowed down to type string
                // that is why it accepted the .toUpperCase() method which is only applicable on type string.

//  in the following example we will implement type narrowing with type guards 

function genId(val: string | number){ // created a function that takes a value, which could either be a string or a number
    
    if (typeof val === "string"){  // assigned a conditional type guard to narrow down the value to a string
        console.log(val.toUpperCase()); 
        
    }else if(typeof val === "number"){
        console.log(val.toFixed(2)); // here assigned the same value to a conditional type guard to narrow down it to a type number
        
    }
}
genId("Amjad") // this line code follows the condition at if block and perform the .toUpperCase() method considering it a stringhttps://github.com/AmjadAfzalAhmed/enums-with-switch.githttps://github.com/AmjadAfzalAhmed/enums-with-switch.git
genId(23.0000) //this line code follows the condition at if else block and perform the .toFixed() method considering it a number