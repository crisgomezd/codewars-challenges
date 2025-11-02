/* Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog. */

// ***************Solution**************

function howManyDalmatians(number) {
 return number < 11 ? "Hardly any" :
  number > 10 && number < 51 ? "More than a handful!" :
   number > 50 && number < 101 ? "Woah that's a lot of dogs!" : "101 DALMATIANS!!!"
}
