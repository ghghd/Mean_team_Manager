const mongoose = require('mongoose'), 
    Player = mongoose.model('Player')

module.exports = {
    index: function(req, res){
        Player.find({}, function(err, players){
            if (err){
                console.log('something went wrong');
            }
            else{
                res.json({player: players});
            }
        })
    },
    addPlayer: function(req, res){
        console.log("POST DATA", req.body);
        let status = 'Undecided';
        const player = new Player({name: req.body.name, position: req.body.position});
        player.save(function(err){
            if (err){
                console.log('something went wrong');
                res.json({err: err.errors});
            }
            else{
                console.log('succesfully added an player');
                res.json({players: player});
            }
        })
    },
    getPlayer: function(req, res){
        let id = req.params.id;
        Player.find({_id: id}, function(err, player){
            if (err){
                console.log('Something went wrong');
            }
            else{
                res.json({players: player});
            }
        })
    },
    addGame1: function(req, res){
        let status = req.body.game;
        Player.update({_id: req.body.id},{game1: status}, function(err){
            if(err){
                console.log('something went wrong');
            }
            else{
                console.log('Sucessfully updated game');
            }
        })
    },
    addGame2: function(req, res){
        let status = req.body.game;
        Player.update({_id: req.body.id},{game2: status}, function(err){
            if(err){
                console.log('something went wrong');
            }
            else{
                console.log('Sucessfully updated game');
            }
        })
    },
    addGame3: function(req, res){
        let status = req.body.game;
        Player.update({_id: req.body.id},{game3: status}, function(err){
            if(err){
                console.log('something went wrong');
            }
            else{
                console.log('Sucessfully updated game');
            }
        })
    },
    deletePlayer: function(req, res){
        let id = req.params.id;
        Player.remove({_id: id}, function(err){
            if(err){
                console.log('something went wrong')
            }
            else{
                console.log('Player Deleted')
            }
        })
    }, 
    removeGame: function(req, res){
        let status = req.params.status;
        Player.update({_id:id}, {games: status}, function(err){
            if(err){
                console.log('Game Error');
            }
            else{
                console.log('Game Removed')
            }
        })
    }
}