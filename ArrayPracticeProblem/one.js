function threedigitNumber(params){
    return Math.floor(Math.random() * 1000 % 900 + 100); 
}

let arr = [];
for(let index = 0; index < 10; index++){
    arr[index]= threedigitNumber();
}

let largest;
let smallest;
let secondLargest;
let secondSmallest;
let index;
for(index = 1; index < arr.length; index++){
    if(arr[index] != arr[index - 1]){
        if(arr[index] < arr[index + 1]){
            largest = index[arr - 1];
            secondLargest = arr[index];
            secondSmallest = arr[index - 1];
            smallest = arr[index];
        } 
        else{
            largest = arr[index];
            secondLargest = arr[index - 1];
            secondSmallest = arr[index];
            smallest = arr[index - 1];
        }
        break;
    }
}
    for(index = index+1;index <arr.length; index++){
        if(arr[index]>largest){
            secondLargest =largest;
            largest = arr[index];
        }
        else if(arr[index]> secondLargest){
            secondLargest = arr[index]
        }
        if(arr[index]< smallest){
            secondSmallest = smallest;
            smallest = arr[index];
        }
        else if (arr[index] < secondSmallest){
            secondSmallest=arr[index];
        }
    }
console.log("Array ", arr);
console.log("Second Largest", secondLargest);
console.log("SecondSmallest", secondSmallest);
