function shu(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr[i],arr[i+1]=
        arr[i+1],arr[i]
        }
    }
    return arr
}

console.log(shu([1,2,3,4,5]));