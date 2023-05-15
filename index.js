// code your solution here
function superbowlWin(array)  {
    return array.find(isFound).year;
}

function isFound(element) {
    let returnValue = ""
    if (element.result === "W") {
        returnValue = element.year
    } else {
        returnValue = undefined
    }
    return returnValue
}
  

