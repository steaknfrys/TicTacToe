const Gameboard = (function () {
  let gameboard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

  const Player = (name, token) => {
    const getToken = () => token;
    const getName = () => name;
    const placeToken = () => {
      //do something
    };
    return { getToken, getName, placeToken };
  };

  function render() {
    //update the game board;
  }

  function gameFlow() {
    // control the flow of the game
    //allow players to take turns
    //determine if there is a winner
  }
  const playerOne = Player("Player 1", "X");
  const playerTwo = Player("Player 2", "O");
})();
