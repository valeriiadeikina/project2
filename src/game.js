import Character from "./domain";

export default class Game {
  start() {
    console.log("game started");
  }
}

class GameSavingData {}

function readGameSaving() {}

function writeGameSaving() {}

export { GameSavingData, readGameSaving, writeGameSaving };
