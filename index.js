let express = require('express')
let path =  require('path')
var app = express();

app.set('views', path.join(__dirname,'html'))
app.set('view engine', 'ejs')


//app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});
app.get('/2', function(req, res){
    res.render('two', { title: 'Hey', message: 'Hello there!'});
});
app.listen(4000);