/*
*************************CODING TASK*********************************
1. Create variables to represent scores of exams for Matt and Simon and set values   80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log 
   the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result 
   in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console 
   as an additional information the student name and his points
7. Test (console log it) all the possible cases (a. both students passed; b. Matt passed and Simon failed; c. Simon passed and 
  Matt failed; d. both students failed).
*/

// SOLUTION:


var lowerLimit = 51;

/* scenario a. both students passed */
// var scoreForMatt = 80;
// var scoreForSimon = 95;


/* scenario b. Matt passed and Simon failed */
var scoreForMatt = 80;
var scoreForSimon = 45;

/* scenario c. Simon passed and Matt failed  */
// var scoreForMatt = 40;
// var scoreForSimon = 85;

/* scenario d. both students failed) */
// var scoreForMatt = 21;
// var scoreForSimon = 45;


if(scoreForMatt>=lowerLimit && scoreForSimon >= lowerLimit){
    console.log("Both students have passed an exam");
}else if(scoreForMatt>=lowerLimit || scoreForSimon >= lowerLimit){
    console.log("One of the students has passed an exam");
    if(scoreForMatt>=lowerLimit){
        console.log("It is Matt and he got " + scoreForMatt +" points");
    }else{
        console.log("It is Simon and he got " + scoreForSimon +" points");
    }
}else{
    console.log("Both students have failed");
}