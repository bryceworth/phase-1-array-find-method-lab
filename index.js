// code your solution here

function superbowlWin(record){
    let item = record.find(obj => obj.result === "W")
    if (item){
        return item.year
    }

}
        