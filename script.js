let colorBox = document.querySelector('[data-testid="colorBox"]')
let numbers = "01234";
let colorOption = document.querySelector('[data-testid="colorOption"]')
let selectedColor;
let scoreResult = document.querySelector('[data-testid="score"]')
let score = 0
let gameStatus = document.querySelector('[data-testid="gameStatus"]')
let color = ["red", "green", "yellow", "orange", "purple"]



function pickedColor(){
    let randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
    switch (randomNumber) {
        case "1":
            targetColor = "red";
            break;
        case "2":
            targetColor = "green";
            break;
        case "3":
            targetColor = "yellow";
            break;
        case "4":
            targetColor = "orange";
            break;
    
        default:
            targetColor = "purple"
            break;

    }
 
  colorBox.style.background = targetColor
  colorOption.innerHTML = "";

color.forEach((el) =>{
    let span =document.createElement('span')
    span.classList.add('spanColor')
    colorOption.appendChild(span)
    span.style.background = el

    span.addEventListener('click', ()=>{
        let selectedColor = el
        if( selectedColor === targetColor){
            score++
            gameStatus.textContent =  "You Win! 🎉";
            scoreResult.innerHTML = `<h3>Score:${score}</h3>`
            setTimeout(() => {
                pickedColor();
            }, 1000);

        } else {
           
            gameStatus.textContent = "Wrong! ❌";
            setTimeout(() => {
                showGameOverScreen();
            }, 1000);
        }

    })
})

}


function startNewGame() {
    window.location.reload();
    document.getElementById('shows').textContent = `Score: ${score}`
}
function showGameOverScreen() {
    document.body.innerHTML = `
        <div class="game-over">
            <h1>You Lose! ❌</h1>
           <p>Final Score: <span>${score}</span></p>
            <button onclick="startNewGame()">Retry</button>
        </div>
    `;
    document.body.classList.add("gameOver");
}

pickedColor()