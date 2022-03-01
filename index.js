// code your solution here

function superbowlWin(array) {
let result = array.find(game => game.result === 'W');
if (result) {
    return result.year
}};
