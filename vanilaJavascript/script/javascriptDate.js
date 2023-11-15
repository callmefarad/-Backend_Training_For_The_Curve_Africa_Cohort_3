// working with javascript

// date string
let myDate = new Date("4-10-2023");
console.log(myDate);

// date argument
let anotherDate = new Date(2023, 9, 23);
console.log(anotherDate);

// timestamp (milliseconds elapsed since 1970)
let fakeTimestamp = new Date(1234567892345);
console.log(fakeTimestamp);

// no arguments
let noArguments = new Date();
console.log(noArguments);

// formatting date
let testDate = new Date(2023, 9, 6, 10, 26, 43);
// - using the toString method
console.log("IsoString: ", testDate.toString());

// - using the toDateString method
console.log("toDateString: ", testDate.toDateString());

// - using the toLocalString method
console.log("toLocaleString: ", testDate.toLocaleString());

// - using the toLocalDateString method
console.log("toLocaleDateString: ", testDate.toLocaleDateString());

//  - using the toGMTString method
console.log("toGMTString: ", testDate.toGMTString());

// - using the toUTCString method
console.log("toUTCString: ", testDate.toUTCString());

// - using the toISOString method
console.log("toISOString: ", testDate.toISOString());

// custom date format
// year, month, day, hour, minute, second, milliseconds
// get the full year from the date and store it in a variable
let testDate2 = new Date(2023, 9, 6, 10, 26, 43);
// Get year from a date
// extract the year from the date
let getYear = testDate2.getFullYear();
// show the result
console.log("Year: ", getYear);

// Get month from a date
// extract the month from the date
let getMonth = testDate2.getMonth();
// show the result
console.log("Month: ", getMonth);

// Get date from a date
// extract the month from the date
let getDate = testDate2.getDate();
// show the result
console.log("Date: ", getDate);

// Get week day from a date
// extract the month from the date
let getWeekDay = testDate2.getDay();
// show the result
console.log("WeekDay: ", getWeekDay);

// from the date above, get the monthWord
let testDate3 = new Date(2023, 9, 6, 10, 26, 43);
console.log(testDate3);
// create an object of the months
const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

// get the index of from testDate3
let monthIndex = testDate3.getMonth();
let monthWord = months[monthIndex];
console.log("Month: ", monthWord);