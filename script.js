 function increaseScore (team) {
    const scoreId = `score${team}`
    const scoreElement = document.getElementById(scoreId)
    let score = parseInt(scoreElement.textContent)
    scoreElement.textContent = ++score
 }
 function decreaseScore (team) {
    const scoreElement = document.getElementById("score" + team)
    let currentScore = parseInt(scoreElement.innerText)
    if(currentScore > 0){
        currentScore--;
        scoreElement.innerText = currentScore
        } else {
            alert("Skor Sıfırdan Küçük Olamaz ")
        }
    }
 document.getElementById("resetbutton1").addEventListener("click" , function () {
    document.getElementById ("score1").innerText = 0
 })
 document.getElementById("resetbutton2").addEventListener("click" , function() {
    document.getElementById ("score2").innerText= 0
 })
 function setscorePromt (team) {
    const score= prompt("Gol Sayısı Giriniz")
    if(score !== null && !isNaN(score)) {
        const scoreNum = parseInt(score)
        document.getElementById(`score${team}`).textContent = scoreNum
    }else{
        alert("Yanlış Giriş Yaptınız veya Geçersiz Değer Girdiniz")
    }
 }
function openNameInput(team) {
    const newName = prompt("Takım İsmi Giriniz:");
    if (newName !== null) {
        const teamNameElement = document.querySelector(`#team${team} h2`);
        teamNameElement.textContent = newName;
    }
}