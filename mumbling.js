/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

// First step I need to take a string of letterz from a to z
// Second step: return a new string with the same letters but I have to add an extra letter for each following letter
//Third: Once that is added I have to print the first letter after each hype capitalized, and make sure the hyphen is added

// I will need a loop, I need to be able to increase the amount of letters added each time the loop runs

// *******************Solution*******************

function accum(s) {
 // 	let arr = []
 //   arr.push(s.charAt(0));
 //   for (let i = 1; i <= s.length - 1; i++) {
 //     arr.push(s.charAt(i).repeat(i+1).toLowerCase());
 //   }
 //   return arr.map(x => x[0].toUpperCase() + x.slice(1)).join('-');

 return Array.from({ length: s.length }, (v, i) => i === 0 ? s.charAt(i).toUpperCase() : s.charAt(i).toUpperCase() + s.charAt(i).repeat(i).toLowerCase()).join('-');
}