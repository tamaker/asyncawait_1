var fs = require('fs');

var myObj = {"time": "111111111"}


function doFirstThing(){
    return new Promise(function(resolve, reject){
        fs.readFile('./file1.txt', function(err, data){
            if (!err){
                resolve(data.toString())
            }
        })
    })
}

function doSecondThing(){
    return new Promise(function(resolve, reject){
        fs.readFile('./file2.txt', function(err, data){
            if (!err){
                resolve(data.toString())
            }
        })
    })
}

doFirstThing().then(function(data){
    myObj['data1'] = data;
    doSecondThing().then(function(data2){
        myObj['data2'] = data2;
        console.log(myObj)
    })
})

