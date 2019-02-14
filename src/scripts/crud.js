const fs = require('fs');
const path = require('path');
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const baseDir = path.join(__dirname,'./animals');

class Crud {

//Write data to a file
    create (file,data) {
        fs.open(`${baseDir}/${file}.json`,'wx',(err,identifier)=>{
            if(!err && identifier){
                //Overide default to place objects inside of an array
                //let jsonArray = [];

                //jsonArray.push(data);

                let stringData = JSON.stringify(data,null,3);

                fs.writeFile(identifier,stringData,(err)=>{
                    if(!err){
                        fs.close(identifier,(err) =>{
                            if(!err) console.log('no errors');
                            else console.log(err);
                        })
                    } else console.log(err);
                })
            }
            else console.log(err);
            });
    };

    read (file) {
        fs.readFile(`${baseDir}/${file}.json`,'utf8',(err,data)=>{
            if(err) return err;
            console.log(data);
        });
    };

    update (file,data) {

        readFile(`${baseDir}/${file}.json`,'utf8')
            .then(newStream =>{
                let newData = JSON.parse(newStream);
                newData.push(data);
                return JSON.stringify(newData,null,3);
            })
            .then(finalData =>{
                fs.truncate(`${baseDir}/${file}.json`,(err)=>{
                    if(!err) {
                        fs.writeFile(`${baseDir}/${file}.json`,finalData,(err)=>{
                            if(err) return err;
                        })
                    } else return err;
                })
            })
            .catch(err => console.log(err))
    }

    delete (file) {
        fs.unlink(`${baseDir}/${file}.json`,err=>{
            if(!err) console.log('deleted');
            else callback('Error deleting file');
        })
    }
};

module.exports = Crud;