import { default as Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from '../game/game.js';

const game = new Game();
game.start();
