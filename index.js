// code your solution here

function superbowlWin(array) {
    const isWinner = array.find(({result}) => result === "W")
    if (isWinner) {
        return isWinner["year"]
    }
}

