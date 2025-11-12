/* Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!" */

// ******************Solution******************

function maskify(cc) {
 let str = cc.slice(0, -4);
 return str.split('').map(c => c = '#').join('') + cc.slice(-4);
}
