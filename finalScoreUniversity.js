

// Final score university//


//created the function getScore with parameter score//
function getScore (score){
//created the variables score where will show the respectives scores//
    let scoreA = score>90 && score<=100
    let scoreB = score>=80 && score<90
    let scoreC = score>=70 && score<80
    let scoreD = score>=60 && score<70
    let scoreF = score<60 && score>0 
//created the variable finalScore, where will show to the user the final score//
    let finalScore ;
//Use If/elseif/else for acess to the finalScore correct according to the score that was passed to the user.//

    if(scoreA) {
        finalScore = 'A'
    } else if (scoreB) {
        finalScore = 'B'
    } else if (scoreC) {
        finalScore = 'C'
    } else if (scoreD) {
        finalScore = 'D'
    } else if (scoreF) {
        finalScore = 'F'
    } else {
        finalScore = 'Invalid Score'
    }
console.log(finalScore)    

    return finalScore
}
// Final algoritm //
