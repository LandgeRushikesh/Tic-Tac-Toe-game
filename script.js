let boxes = document.body.querySelectorAll(".box")
let Winner = document.body.querySelector(".winner")
let msg = document.body.querySelector(".msg")
let newGame = document.body.querySelector(".newGame")
let reset = document.body.querySelector(".reset")
let game = document.body.querySelector(".game")

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]
let checkWinner = ()=>{
    for(pattern of winningPattern){
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        // console.log(pos1val,pos2val,pos3val)
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}
let boxDisable = ()=>{
    boxes.forEach((box)=>{
        box.disabled = true
    })
}
let boxEnable = ()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
    })
}

let showWinner = (winner)=>{
    msg.innerText = `Congratulations,Winner is ${winner}!!!!`;
    Winner.classList.remove("hide");
    game.classList.add("hide");
    reset.classList.add("hide");
    boxDisable();
}
let gameDraw = ()=>{
    msg.innerText = "Game Draw!!!!";
    Winner.classList.remove("hide");
    game.classList.add("hide");
    reset.classList.add("hide");
}
let turnO = true;
let count = 0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.style.color = "#B39292"
            box.innerText = "O"
            turnO = false
        }
        else{
            box.style.color = "#8C0412"
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        let isWinner = checkWinner();
        count++;
        if(count == 9 && !isWinner){
            gameDraw();
        }
        })
})
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        turnO = true;
        boxEnable();
        count = 0;
    })
})
newGame.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        turnO = true;
        boxEnable();
        Winner.classList.add("hide")
        game.classList.remove("hide")
        reset.classList.remove("hide")
        count = 0;
    })
})