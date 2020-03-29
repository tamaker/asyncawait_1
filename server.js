var fs = require('fs');

var myObj = {"time": "111111111"}


function doFirstThing(){
    return new Promise(function(resolve, reject){
        try {
            fs.readFile('./file1.txt', function(err, data){
                if (!err){
                    resolve(data.toString())
                } else {
                    reject('problem with file 1')
                }
            })
        } catch(e){
            console.log('error!');
            console.log(e);
        } finally {
            console.log('file 1 finished')
        }
    })
}

function doSecondThing(){
    return new Promise(function(resolve, reject){
        try {
            fs.readFile('./file2.txt', function(err, data){
                if (!err){
                    resolve(data.toString())
                } else {
                    reject('problem with file 2')
                }
            })
        } catch(e){
            console.log('error!');
            console.log(e);
        } finally {
            console.log('file 2 finished')
        }
    })
}

async function main(){
    myObj['data1'] = await doFirstThing()
    myObj['data2'] = await doSecondThing();
    console.log(myObj)
}

main();