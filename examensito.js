function search(element, array){
    var res = -1;
    if(array instanceof Array){
        for (var i = 0; i < array.length; i++) {
            if(element === array[i]){
                res = i;
                i = array.length;
            }
        }
    }
    return res;
}

function sum(array){
    var res = -1;
    if(array instanceof Array){
        res=0;
        for (var i = 0; i < array.length; i++) {
            res += array[i];
        }
    }
    return res;
}

function removeAll2(element, array){
    var res = [];
    if(array instanceof Array){
        for (var i = 0; i < array.length; i++) {
            res = res.concat(array[i]);
            if(element === array[i]){
                array.splice(i,1);
                i--;
            }
        }
    }
    return res;
}

function addEnd(element, array){
    if(array instanceof Array){
        array[array.length]=element;
    }
    return array;
}


function removeLast(array){
    if(array instanceof Array){
        if(array.length>0){
            array.splice(array.length-1);
        }
    }
    return array;
}

function addBeginning(element, array){
    if(array instanceof Array){
        array.unshift(element);
    }
    return array;
}

function removeFirst(array){
    if(array instanceof Array){
        if(array.length >0){
            array.splice(0,1);
        }
    }
    return array;
}

function polymerization(array, another_array){
    var res = [];
    if(array instanceof Array && another_array instanceof Array){
        if(array.length>another_array.length){
            for (var i = 0; i < another_array.length; i++) {
                array = array.concat(another_array[i]);
            }
            res=array;
        }else {
            for (var i = 0; i < array.length; i++) {
                another_array = another_array.concat(array[i]);
            }
            res=another_array;
        }
    }
    return res;
}

function addWherever(index, element, array){
    if(array instanceof Array){
        if(index >= 0 && index < array.length){
            var copy = array[index];
            array[index] = element;
            for (var i = index+1; i < array.length; i++) {
                var another_copy = array[i];
                array[i]=copy;
                copy = another_copy;
            }
            array[array.length] = copy;
        }
    }
    return array;
}

function countOcurences(element, array){
    var res=0;
    if(array instanceof Array){
        for (var i = 0; i < array.length; i++) {
            if(element === array[i]){
                res++;
            }
        }
    }
    return res;
}

function findDuplicades(array){
    var res=[];
    if(array instanceof Array){
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            for (var j = i+1; j < array.length; j++) {
                if(element === array[j]){
                    if(res.indexof(element)<0){
                        res[res.length] = element;
                    }
                    j = array.length;
                }
            }
        }
    }
    return res;
}

function squareArray(array){
    if(array instanceof Array){
        for (var i = 0; i < array.length; i++) {
            array[i] = Math.sqrt(array[i]);
        }
    }
    return array;
}

function findOcurrences(element, array){
    var res=[];
    if(array instanceof Array){
        for (var i = 0; i < array.length; i++) {
            if(element === array[i]){
                res = res.concat(i);
            }
        }
    }
    return res;
}
