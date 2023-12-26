// let arr = [1,2,3,4,5]

// let sqarr = []
//  let i =0

// while(i<=arr.length){
//       sqarr.push(arr[i]*arr[i])
//       i++
// }

// console.log(sqarr)

const arr = [1,2,3,4,5]

const sqarr = arr.map(function(n){return n*n })

console.log(sqarr)