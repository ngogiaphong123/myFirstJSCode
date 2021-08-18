function binarySearch(arr , start , end , value) {
    if(start > end) return -1;
    let mid = Math.floor((start + end) / 2) ;
    if(arr[mid] === value) return mid;
    if(arr[mid] < value) return binarySearch(arr , mid +1 , end , value);
    else return binarySearch(arr , start , mid-1 ,value);
}
let arr =[];
for(let i = 0 ; i < 1024 ; i=i+2) {
    arr.push(i);
}
let start = 0;
let end = arr.length - 1;
let target = 668;

function iteBinarySearch(arr ,target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) start = mid + 1;
        else if (arr[mid] > target) end = mid - 1;
    }
    return -1;
}
console.log(iteBinarySearch(arr, target));
console.log(binarySearch(arr , start , end , target));