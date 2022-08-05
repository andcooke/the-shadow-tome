//apis for creating and joining game
<<<<<<< HEAD
const Game = require('../../models/Gamemodel')
=======
>>>>>>> 2f9fbe9a7c190aeefb99dcaad2f5d2f81e766b36
const router = require('express').Router();
const Game = require('../../models/Gamemodel');

//fetch for creating a game
router.get('/', async (req, res) => {
    //here should create a new table for the game with a unique game id
    //and should send that game id back
    try{
    const newGame = await Game.create({"player1":"","player2":"","playing":"false","player1turn":"true"});
    res.status(200).json(newGame);
    // res.render('create')
    }catch (err) {
      res.status(500).json(err);
    }
});


//fetch for joining a game
router.get('/:gameId', async (req, res) => {
  /*here should check all of the avalible tables for the game id
  if it finds it tell the front end it is found
  else tell the front end there was an error*/
  try{
    const gameData = await Game.findByPk(req.params.gameId);
    if(gameData){
      res.status(200).json(gameData);
      return;
    }
    res.status(404).json("sorry no game has this id")
  }catch{
    res.status(500).json(err);
  }


  try{
    const gameData = await Game.findByPk(req.params.gameId);
    if(gameData){
      res.status(200).json(gameData)
      return
    }
    res.status(404).json("sorry no game has this id")
  }catch{
    res.status(500).json(err);
  }
});

module.exports = router;