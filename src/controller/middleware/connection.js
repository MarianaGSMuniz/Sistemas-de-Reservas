'use strict'

const mongoose = require ('mongoose');
const keys = require ('../../bin/keys');

module.exports.connect = () =>{
    mongoose.connect (Keys.database.connection, err =>{
        iff (err) ; {
            console.log ('==> [-] mongodb' );
            else {
                console.log ('==> [+] mongodb' );
                            }
        }
    }, { userNewUrlParser: true });
}