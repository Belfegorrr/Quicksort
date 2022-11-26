const cepBackend = [89212100 , 09530210, 83308070, 18401510, 86321324, 17532100, 83308070, 78101001];

function quickSort(array) {
    if(array.length === 1){
        return array;
    }

    const pivo = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for(let i = 0; i < array.length - 1; i++){
        if(array[i] < pivo){
            leftArr.push(array[i]);
        }else{
            rightArr.push(array[i]);
        }
        
    }
    if(leftArr.length > 0 && rightArr.length > 0){
        return [...quickSort(leftArr), pivo, ...quickSort(rightArr)];        
    } else if(leftArr.length > 0) {
        return [...quickSort(leftArr), pivo];
    } else {
        return [pivo, ...quickSort(rightArr)];
    }
}


console.log(quickSort(cepBackend))