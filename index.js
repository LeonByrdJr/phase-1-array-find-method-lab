// code your solution here
function superbowlWin(record){
    // for(let result of record){
    //     if(record.result === "W"){
    //         return record.year
    //     } else {

    //     }
    // }
let result = record.find(record => record.result === "W")
    return !!result ? result.year : undefined
}
