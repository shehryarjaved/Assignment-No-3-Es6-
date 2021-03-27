
// Q1- How to unique, sort an array in ascending order?
// const arr = [1,40,2,10,10,40,2,2,5,3,54,2,42,5,5,5]

// function sort_unique(arr) {
//     if (arr.length === 0) return arr;
//     arr = arr.sort(function (a, b) { return a*1 - b*1; });
//     var ret = [arr[0]];
//     for (var i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
//       if (arr[i-1] !== arr[i]) {
//         ret.push(arr[i]);
//       }
//     }
//     return ret;
//   }
//   const arr = [1,40,2,10,10,40,2,2,5,3,54,2,42,5,5,5]
//   console.log(sort_unique(arr));
  



// Q2- Print values using for loop in the following sequence


// for(i=1; i <= 5; i++)
// {
//  for(j=1; j<=i; j++)
// {
//   document.write(j);
//   if(j == i)
//   continue;
//   else
//   document.write(' ');
//  }
//   document.write('<br />');
//  }


// Q3- Sum the folliwg number using for loop
// const num = 12345 (its number type)
// Output should be: 15


// var number = 12345,
//     output = [],
//     sNumber = number.toString();

// for (var i = 0, len = sNumber.length; i < len; i += 1) {
//     output.push(+sNumber.charAt(i));
// }
// for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
// console.log(sum);



//Q 4- Find the third highest number in array using Set, sort and reverse
// const arr = [1,210,5,7,65,5,20,8,210,65];


// var maxPoints = new Array();
// const scoreByPattern = [1,210,5,7,65,5,20,8,210,65];
// findLargest3();

// function findLargest3() {
//   scoreByPattern.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
  
//   console.log(scoreByPattern + "/******/" + scoreByPattern[0] + "/" + scoreByPattern[1] + "/" + scoreByPattern[2]);  

//   console.log(scoreByPattern.slice(0, 3));
// }