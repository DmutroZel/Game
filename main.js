let posY1 = 50;
let posX1 = 50;

let posY2 = 50;
let posX2 = 50;


let targetY = 50;
let targetX = 50;

document.body.onkeyup = function (e) {
    if (e.keyCode == 38) {
        if (posY1 > 5){
        posY1--;
        player1.style.top = posY1 + 'vh';
        console.log(posY1);
        checkWinner();
        } else {
            posY1 = 95;
        }
    } else if (e.keyCode == 40) {
        if (posY1 < 95){
        posY1++;
        player1.style.top = posY1 + 'vh';
        checkWinner();
        console.log(posY1);
        } else {
            posY1 = 5;
        }
    }
    else if (e.keyCode == 39) {
        if (posX1 < 95) {
            posX1++;
            player1.style.left = posX1 + '%';
            checkWinner();
            console.log(posX1);
        } else {
            posX1 = 0;
        }
    }
    else if (e.keyCode == 37) {
        if (posX1 > 5){
        posX1--;
        player1.style.left = posX1 + '%';
        checkWinner();
        console.log(posX1);
    } else {
        posX1 = 95;
    }
    } else if (e.keyCode == 87) {
        if (posY2 > 5){
        posY2--;
        player2.style.top = posY2 + 'vh';
        checkWinner();
        } else {
            posY2 = 95;
        }
    } else if (e.keyCode == 83) {
        if (posY2 < 95){
        posY2++;
        player2.style.top = posY2 + 'vh';
        checkWinner();
        } else{
            posY2 = 5;
        }
    }
    else if (e.keyCode == 65) {
        if (posX2 > 5){
        posX2--;
        player2.style.left = posX2 + '%';
        checkWinner();
        } else {
            posX2 = 95;
        }
    }
    else if (e.keyCode == 68) {
        if (posX2 < 95){
        posX2++;
        player2.style.left = posX2 + '%';
        checkWinner();
    }else{
        posX2 = 5;
    }

    }

}


function setRandom() {
    targetY = Math.floor(Math.random() * 95);
    targetX = Math.floor(Math.random() * 95);
    target.style.top = targetY + '%';
    target.style.left = targetX + '%';

}
setRandom();


let score1 = 0;
let score2 = 0;
function checkWinner() {

    if (targetX == posX1 && targetY == posY1) {
        score1++;
        player1.innerText = score1;
        setRandom();
        resetGame();
    } else if (targetX == posX2 && targetY == posY2) {
        score2++;
        player2.innerText = score2;
        setRandom();
        resetGame();
    }
}


function resetGame() {
    if (score1 >= 3 || score2 >= 3) {
        alert('Гру завершено');
        score1 = 0;
        player1.innerText = score1;
        score2 = 0;
        player2.innerText = score2;
    }
}

let isOpen = false;
menuBtn.onclick = function () {
    if (isOpen == false) {
        menu.style.right = 0;
        isOpen = true;
    } else {
        menu.style.right = '-400px';
        isOpen = false;
    }
}
space.onclick = function () {
    document.body.style.backgroundImage = "url('https://external-preview.redd.it/7BQ9Ig391FbwCzMSgnCCgrzbEpnWXufcUSKwe6g7GXI.jpg?auto=webp&s=7729ce0fa75865ea3e0a40076360938065072bfe')";
    document.body.style.backgroundSize = "cover";
}
sigma.onclick = function () {
    document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/344/966/486/peaky-blinders-wallpaper-preview.jpg')";
    document.body.style.backgroundSize = "cover";  
}
peter.onclick = function () {
    document.body.style.backgroundImage = "url('https://wallpapers.com/images/hd/peter-griffin-inside-jail-xwnzfxlhh2opxjf2.jpg')";
    document.body.style.backgroundSize = "cover";  
}
miami.onclick = function () {
    document.body.style.backgroundImage = "url('https://www.pixel4k.com/wp-content/uploads/2018/09/miami-florida-usa-city-ocean-bay-coffee-palm-trees-tables-4k_1538068761.jpg')";
    document.body.style.backgroundSize = "cover";  
}
 
peter2.onclick = function () {
    target.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png')";
    target.style.backgroundSize = "cover";
    target.style.border = 'none';
    target.style.backgroundColor = 'transparent';
}
cheese.onclick = function () {
    target.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/009/380/457/non_2x/cheese-clipart-design-illustration-free-png.png')";
    target.style.backgroundSize = "cover";
    target.style.border = 'none';
    target.style.backgroundColor = 'transparent';
}
bird.onclick = function () {
    target.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/022/661/103/original/blue-cartoon-bird-icon-free-png.png')";
    target.style.backgroundSize = "cover";
    target.style.border = 'none';
    target.style.backgroundColor = 'transparent';
}
mario.onclick = function () {
    target.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d82b2f9f-4ae0-436c-ab1c-777c8318e035/de69voq-619672bb-eed7-4f35-b35c-745f2c20cfae.png/v1/fill/w_1280,h_1987/mario__png__by_kevinfortuna_de69voq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk4NyIsInBhdGgiOiJcL2ZcL2Q4MmIyZjlmLTRhZTAtNDM2Yy1hYjFjLTc3N2M4MzE4ZTAzNVwvZGU2OXZvcS02MTk2NzJiYi1lZWQ3LTRmMzUtYjM1Yy03NDVmMmMyMGNmYWUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.bPecbetNLVlig-xBB3DG-BH8DKSbnl9tT_uRepIf1dg')";
    target.style.backgroundSize = "cover";
    target.style.border = 'none';
    target.style.backgroundColor = 'transparent';
}









gun.onclick = function () {
    player1.style.backgroundImage = "url('https://pngfre.com/wp-content/uploads/gun-44-1024x773.png')";
    player1.style.backgroundSize = "cover";
    player1.style.backgroundColor = 'transparent';
}
apple1.onclick = function () {
    player1.style.backgroundImage = "url('https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png')";
    player1.style.backgroundSize = "cover";
    player1.style.backgroundColor = 'transparent';  
}
armatura.onclick = function () {
    player1.style.backgroundImage = "url('https://ssc.org.ua/wp-content/uploads/2018/01/arm10_1-90d.png')";
    player1.style.backgroundSize = "cover";
    player1.style.backgroundColor = 'transparent';
}
dog.onclick = function () {
    player1.style.backgroundImage = "url('https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-white-and-brown-cute-dog-animal-png-image_10211052.png')";
    player1.style.backgroundSize = "cover";
    player1.style.backgroundColor = 'transparent';
}




bull.onclick = function () {
    player2.style.backgroundImage = "url('https://i.pinimg.com/originals/d3/77/2f/d3772f81bcb8335d5995358739bcd391.png')";
    player2.style.backgroundSize = "cover";
    player2.style.backgroundColor = 'transparent';
}
apple2.onclick = function () {
    player2.style.backgroundImage = "url('https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png')";
    player2.style.backgroundSize = "cover";
    player2.style.backgroundColor = 'transparent';
}
tank.onclick = function () {
    player2.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/030/740/112/original/battle-tank-side-view-isolated-on-transparent-background-military-tank-generative-ai-png.png')";
    player2.style.backgroundSize = "cover";
    player2.style.backgroundColor = 'transparent';
}
sigmaDen.onclick = function () {
    player2.style.backgroundImage = "url('https://cdn.inspireuplift.com/uploads/images/seller_products/33497/1705552136_PatrickBatemanSigmaFaceAmericanPsycho.png')";
    player2.style.backgroundSize = "cover";
    player2.style.backgroundColor = 'transparent';
}


var audio = document.getElementById("myAudio");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

audiobtn.onclick = function () {
    toggleAudio();
}
audio.volume = 0.099;











