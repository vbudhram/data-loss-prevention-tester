/**
 * Created by vbudhram on 4/27/15.
 */
(function (express, cors) {

    var app = new express(),
        publicRoute = new express.Router(),
        port = process.env.PORT || 8000;

    app.use(cors());

    app.listen(port, function () {
        console.log('Server started at port: ' + port);
    });

    publicRoute.get('/', function(req, res, next){
        res.send('Got it!').status(200);
    });

    publicRoute.post('/', function(req, res, next){
        res.send('Ok!').status(200);
    });

    app.use(publicRoute);

}(require('express'), require('cors')));
