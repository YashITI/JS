/**if condition **/

//let marks = 35;

// if(marks < 60){
//     console.log("Pass");
// }


/*-----------------------------------*/
/* If else condition */
// let age = 18;

// if (age < 25) {
//     console.log("Go To Do voting");
// } else {
//     console.log("Don't Go");
// }


/*-----------------------------------*/
/* If else if condition */
//Example 1

// let marks = prompt("Enter your marks"); 

// if(marks < 60){
//     console.log("PASS");
// }else if(marks < 70){
//     console.log("Very Good");
// }else{
//     console.log("Good");
// }

//Example 2
if(confirm("Are you sure?")){
    alert("Continue");

    let marks = prompt("Enter your age");

        if(marks == 40){
            alert("Good");
        }else if(marks >= 60){
            alert("First")
        }   
        else{
            alert("Fail")
        }
}

else{
    alert("NO!")
}