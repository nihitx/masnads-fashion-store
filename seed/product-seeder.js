/**
 * Created by nihit on 12/18/16.
 */
var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'localhost:27017/shopping');

var products  = [
    new Product({
        imagePath : 'https://mosaic02.ztat.net/vgs/media/catalog1/VA/22/2X/00/LQ/15/VA222X00L-Q15@9.jpg',
        title : 'Vans',
        description : ' Classic sweat shirt',
        price : 70,
    }),
    new Product({
        imagePath : 'https://mosaic01.ztat.net/vgs/media/catalog1/K4/41/2A/A1/2O/11/K4412AA12-O11@11.jpg',
        title : 'Kiomi',
        description : 'Tape shoe tan',
        price : 74,
    }),
    new Product({
        imagePath : 'https://mosaic01.ztat.net/vgs/media/catalog1/AN/62/1C/AB/TK/11/AN621CABT-K11@13.jpg',
        title : 'Anna Field',
        description : 'Evening dress',
        price : 122.3,
    }),
    new Product({
        imagePath : 'https://mosaic02.ztat.net/vgs/media/catalog1/GU/15/1H/0L/SJ/11/GU151H0LS-J11@14.jpg',
        title : 'Guess',
        description : 'Handbag',
        price : 91,
    }),
    new Product({
        imagePath : 'https://mosaic01.ztat.net/vgs/media/catalog1/N1/24/1D/06/NJ/12/N1241D06N-J12@11.jpg',
        title : 'Nike Performance',
        description : 'Pro Top',
        price : 54.9,
    }),
    new Product({
        imagePath : 'https://mosaic01.ztat.net/vgs/media/catalog1/M5/92/1H/02/5G/11/M5921H025-G11@11.jpg',
        title : 'Vera Moda',
        description : 'GAD',
        price : 89,
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

