/* Debug celsius converter
Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9) */

// ******************Solution******************

function weatherInfo(temp) {
 let c = convertToCelsius(temp);
 return c > 0 ? `${c} is above freezing temperature` : `${c} is freezing temperature`;
}

function convertToCelsius(temperature) {
 let celsius = (temperature - 32) * 5 / 9;
 return celsius;
}
