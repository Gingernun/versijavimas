console.log("Labas!");

//atspausdina lyginius mazejancia tvarka nuo 10 iki 0
var num=10;
while (num > 0) {
   console.log(num);
   num--;
   num--;
}

//atspausdina didesni is dvieju
function didziausiasIsDvieju(a,b) {

    if (a>=b) {console.log(a)} 
    else {console.log(b)};
}

didziausiasIsDvieju(6,5);

//apsuka skaiciu

function apsukaSkaiciu(a) {
    var a1=a;
    var n2=0;
    var n1=a;
    while(a1>=10){ 
        n1=a1%10;
        a1=(a1-n1)/10;
        n2=(n1*10)+n2;
        }
        return(n2);
    }
    
console.log(apsukaSkaiciu(32243));    


//function apsukaSkaiciu(a) {
//     var x1=a;
//   While (x1>=10) {
 //        n1=a%10;
 //       a=a/10;
 //       a1=n1*10;
 //   }
 //   return(a1);
 //   console.log(a1);
//}

//apsukaSkaiciu(32243);

function laipsniai(b,n) {
        var i=1;
        var sk=b;
        while (i<n) {
         sk=sk*b;
         i++;
        }
     return(sk);
}

console.log(laipsniai(3,3));

