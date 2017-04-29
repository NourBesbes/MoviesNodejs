var Movie=require('../models/movie');

var mongoose= require('mongoose');
mongoose.connect('mongodb://nouha:123456@ds121091.mlab.com:21091/tp2');


var movies = [
    new Movie ({

        'id':1,
        'title': 'Titanic',
        'year': 1980,
         'imagePath': 'http://1.bp.blogspot.com/-XASG8vofTFk/Ty8Pgcs3IFI/AAAAAAAAAEY/JtE_L70ITP0/s1600/Titanic.jpg'
    }),
      new Movie({

        'id':2,
        'title': 'The room',
        'year': 2016,
         'imagePath': 'https://upload.wikimedia.org/wikipedia/en/f/f0/Room_Poster.jpg'
    }),
      new Movie({
      'id':3,
        'title': 'The girl on the train',
        'year': 2016,
         'imagePath': 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzFlMjA0ZmUtZWI0Mi00ZGJkLTlmMmYtZmE1ODZiMjhjMGM0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
     
    }),
      new Movie({
      'id':4,
        'title': 'Thor',
        'year': 2012,
         'imagePath': 'http://images.wookmark.com/100251_thor_ver5_xxlg.jpg'
    }),
    
      new Movie({
      'id':5,
        'title': 'Hangover',
        'year': 2013,
         'imagePath': 'http://img.moviepostershop.com/the-hangover-movie-poster-2009-1020488737.jpg'
    }), 
    new Movie({
      'id':6,
        'title': 'Bring Him Home',
        'year': 2013,
         'imagePath': 'http://www.plagij.at/ckfinder/userfiles/images/the-martian%20(1).jpg'
    }),
]

var done = 0;
for (var i = 0; i < movies.length; i++) {
    console.log("ouudddui");
    movies[i].save(function (err, result) {
        done++;
        console.log("osssuuui");
        if (done === movies.length)
        { exit(); 
        console.log("nooon");}
    });
}

function exit() {
    mongoose.disconnect();
}