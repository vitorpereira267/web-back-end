var array = [];


array.push(
    function (index) {
        console.log("Hello World" + index)
    }
); 



for (let i = 0; i < array.length; i++) {
    array[0](i + 1);
    
}