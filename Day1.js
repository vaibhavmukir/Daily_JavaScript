//Day 1

console.log("Hello JavaScript");

const accountId=1233; //not Changeble

var accountPassword=1234;
/*
Prefer not to use var
Becouse of issue in block scope and functional scope
*/

let accountEmail="vaibhav@123"; //safe use block scope varibale

accountCity ="Pune";

let mob_no; // javascrpit jab bhi hamne value nahi assign kiyi to undifed krta hai...

console.table([accountId,accountPassword,accountEmail,accountCity,mob_no]); // this is all value the print in the table
