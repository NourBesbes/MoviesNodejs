var Actor=require('../models/actor');

var mongoose= require('mongoose');
mongoose.connect('mongodb://nouha:123456@ds121091.mlab.com:21091/tp2');


var actors = [
    new Actor({
//'id':1,
        'name': 'Angelina Jolie',
        'birth_year': '1986',
             'imagePath': 'http://d2szeldfz6w13x.cloudfront.net/wp-content/uploads/2017/04/angelina-jolie.jpg'
    }),
      new Actor({

 //'id':2,
        'name': 'Julia Roberts',
        'birth_year': '1960',
             'imagePath': 'http://www.smartearningmethods.com/wp-content/uploads/2013/01/Julia-Roberts.jpg'
    }),
      new Actor({

    //  'id':3,
        'name': 'Sandra Bullok',
        'birth_year': '2012',
             'imagePath': 'http://img.usmagazine.com/article-leads-vertical-300/1251206288_sandra_bullock_290x402.jpg'
    }),
      new Actor({
 //'id':4,
        'name': 'Brad Pitt',
        'birth_year': '1959',
             'imagePath': 'http://img.usmagazine.com/article-leads-vertical-300/1250530894_brad_pitt_290x402.jpg'
    }),
      new Actor({
//'id':5,
        'name': 'Jennifer Lawrence',
        'birth_year': '2012',
             'imagePath': 'http://images.tienphong.vn/Uploaded/tuoanh/2016_08_24/1_NPZV.jpg'
    }),
]

var done = 0;
for (var i = 0; i < actors.length; i++) {
    console.log("ouudddui");
    actors[i].save(function (err, result) {
        done++;
        console.log("osssuuui");
        if (done === actors.length)
        { exit(); 
        console.log("nooon");}
    });
}

function exit() {
    mongoose.disconnect();
}