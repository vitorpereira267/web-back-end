var array = [];


array.push(
    function (index) {
        console.log("Hello World" + index)
    }
); 

array.push(function(params){

});

for (let i = 0; i < array.length; i++) {
    array[0](i + 1);
    
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

array.forEach(function(elem, i){

});

var array2 = [2, 3, 4, 5, 6];

for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    console.log("Element: " + element + " at index: " + i);
}

console.log(" ");

array2.forEach(function(element, i){
    console.log("Element: " + element + " at index " + i)
})