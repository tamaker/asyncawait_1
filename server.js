var fs = require('fs');

var myObj = {"time": "111111111"}

fs.readFile('./file1.txt', function(err, data){
    if (!err){
        myObj['data1'] = data.toString();
        console.log(data.toString())
    } else {
        console.log(err)
    }
})

fs.readFile('./file2.txt', function(err, data){
    if (!err){
        myObj['data2'] = data.toString();
        console.log(data.toString())
    } else {
        console.log(err)
    }
})

console.log(myObj);