const players = require('../controllers/players.js');

//-------------------Routes-------------------------

module.exports = function(app){
//-------------get all--------------------------
        app.get('/players/list', function(req, res){
            console.log('in routes.js/get')
            players.index(req, res);
        })
//---------------add new -------------------------
        app.post('/players/new/', function(req, res){
            console.log(req.body);
            console.log('in routes.js/post');
            players.addPlayer(req, res);
        })
//---------------get one ---------------------------------
/*        app.get('/players/:id', function(req, res){
            console.log(req.params);
            players.getPlayer(req, res);
        })
*/
//-----------------delete one -------------------------------
        app.delete('/players/delete/:id', function(req, res){
            players.deletePlayer(req, res);
        })
//----------------add game ----------------------------------
        app.put('/game/add/1', function(req, res){
            console.log('in add game1 routes')
            players.addGame1(req, res);
        })
        app.put('/game/add/2', function(req, res){
            console.log('in add game2 routes')
            players.addGame2(req, res);
        })
        app.put('/game/add/3', function(req, res){
            console.log('in add game3 routes')
            players.addGame3(req, res);
        })
}