function compareTriplets(a, b) {
    let aliceScore = 0
    let bobScore = 0
    for(let i =0; i < a.length; i++) {
        if(a[i] < b[i]) {
            bobScore++
            
        }
        else if ( a[i] > b[i]) {
            aliceScore++
        }
    }
    
    return [aliceScore, bobScore]
}

console.log(compareTriplets([3, 6, 8], [5, 7, 8]))