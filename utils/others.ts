
export function parseString(string:string){
    var removeFirst= string?.slice(1)
    var removeLast = removeFirst?.slice(0, removeFirst.length -1)
    var array = removeLast?.split(",")

    return array
}