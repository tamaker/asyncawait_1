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

async function main(){
    myObj['data1'] = await doFirstThing()
    myObj['data2'] = await doSecondThing();
    console.log(myObj)
}

main();