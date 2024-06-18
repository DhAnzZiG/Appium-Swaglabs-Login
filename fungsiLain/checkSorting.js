
function sortedAscend(data){
    for (let i=0; i < data.length - 1; i++){
        if (data[i] > data[i+1]){
            return false;
        }
    }
    return true;
}

function sortedDescend(data){
    for (let i=0; i < data.length - 1; i++){
        if (data[i] < data[i+1]){
            return false;
        }
    }
    return true;
}

function HargaAscend(data){
    data.map(Number).sort((a, b) => a - b);
}

function HargaDescend(data){
    data.map(Number).sort((b, a) => b - a);
}

export {sortedAscend, sortedDescend, HargaAscend, HargaDescend}