/**
 * Created by nihit on 12/18/16.
 */
var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products  = [
    new Product({
        imagePath : 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/250px-Gothiccover.png',
        title : 'weeee',
        description : ' AWeeesomeee',
        price : 15,
    }),
    new Product({
        imagePath : 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/250px-Gothiccover.png',
        title : 'Gowwww',
        description : ' this is great',
        price : 15,
    }),
    new Product({
        imagePath : 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/250px-Gothiccover.png',
        title : 'killaa crw',
        description : ' i love it',
        price : 15,
    }),
    new Product({
        imagePath : 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/250px-Gothiccover.png',
        title : 'joker',
        description : ' kill em',
        price : 15,
    }),
    new Product({
        imagePath : 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/250px-Gothiccover.png',
        title : 'harley',
        description : ' naughtttyyy',
        price : 15,
    }),
    new Product({
        imagePath : 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/250px-Gothiccover.png',
        title : 'suicide',
        description : ' squad',
        price : 15,
    })

];

var done = 0;
for(var i = 0 ; i < products.length ; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

