var fs = require('fs');

var data= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac auctor elit. Quisque ornare diam vel metus gravida, vel commodo enim gravida.";

for(let index = 0; index < 1000; index++){
    fs.writeFileSync('text.txt', data);
}




