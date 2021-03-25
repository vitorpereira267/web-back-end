var arrayUtils = {
    isEmpty: function (array) {
        if (array != undefined && array != null) {
            return array.length == 0;
        }
        else {
            return "Array is undefined";
        }
    },
    max: function (array) {
        var m = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > m) {
                m = array[i];
            }
        }
        return m;
    },

    min: function (array) {
        var m = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < m) {
                m = array[i];
            }
        }
        return m;
    },
    average: function (array) {
        var sum = 0;
        for (let i = 1; i < array.length; i++) {
            sum += array[i];
        }
        var avg = sum / array.length;
        return avg;
    },

    indexOf: function (array, value) {
        for (let i = 1; i < array.length; i++) {
            if (value == array[i]) {
                return i;
            }
        }
        return -1;
    },

    subArray: function (array, startIndex, endIndex) {
        var a = [];
        for (let i = startIndex; i <= endIndex; i++) {
            a.push(array[i]);
        }
        return a;
    },

    isSameLenght: function (array, otherArray) {
        var I = array.length
        var Io = otherArray.length;

        if (I == Io) {
            return true;
        } else {
            return false;
        }

        //return array.lenght == otherArray.length;
    },

    reverse: function (array) {
        var r = [];
        for (let i = array.lenght - 1; i >= 0; i--) {
            r.push(array[i]);
        }
        return r;
    },

    swap: function (array, index1, index2) {
        //obter um valor que esta num determinado indice no array
        var val1 = array[index1];
        var val2 = array[index2];

        array[index1] = val2;
        array[index2] = val1;

        return array;
    },

    contains: function (array, value) {

        for (let i = 0; i < array.length; i++) {
            if (value == array[i]) {
                return true;
            }
        }
        return false;
    },

    concat: function (array, otherArray){
        var concatArray = array;
        for (let i = 0; i < otherArray.length; i++) {
            concatArray.push(otherArray[i]);
        }
        return concatArray;
    },









};













module.exports = arrayUtils;