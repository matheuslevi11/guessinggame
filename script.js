/* setInterval(() => {
    window.location.reload();
}, 5000); 
 */
function defineName(i) {
    name = prompt(`Digite o nome do Jogador ${i}`);
    document.getElementById(`player${i}name`).innerHTML = name;
}

function defineAge(i) {
    age = prompt(`Digite a idade do Jogador ${i}`);
    document.getElementById(`player${i}age`).innerHTML = age;
}

function createProfile(i) {
    defineName(i);
    defineAge(i);
}

function gameStart(on, chosenNumber) {
    
    if (on == 0) {
        chosenNumber = Math.floor(Math.random() * 20 + 1);
    }
    gamebox = document.getElementById('gamebox');
    player1 = document.getElementById("player1name").innerHTML;
    player2 = document.getElementById("player2name").innerHTML;
    playerTurn = '';
    if (on % 2 == 0) {
        playerTurn = player1;
    }
    else {
        playerTurn = player2;
    }
    if (on == 0) {
        gamebox.innerHTML += `<p id="turn">Turno de ${playerTurn}</p>`
        gamebox.innerHTML += `<div id="guesstype"></div>`
        gamebox.innerHTML += `<button class="playerbtn" id="aligned" onClick="showGuess(${chosenNumber}, '${playerTurn}', ${on})">Adivinhe!</button>`
    }
    else {
        document.getElementById('turn').innerHTML = `Turno de ${playerTurn}`;
        document.getElementById('guesstype').innerHTML = '<div id="guesstype2"></div>'
        document.getElementById('aligned').innerHTML = "Adivinhar!";
        document.getElementById('aligned').setAttribute('onclick', `showGuess(${chosenNumber}, '${playerTurn}', ${on})`)

    }
}

function showGuess(chosenNumber, player, on) {
    guessNumber = prompt('Adivinhe o numero!');
    
    button = document.getElementById('aligned')
    button.innerHTML = "Verifique!";
    button.setAttribute('onclick', `check(${chosenNumber}, '${player}', ${on}, ${guessNumber})`);
}

function check(chosenNumber, player, on, guessedNumber) {
    button = document.getElementById('aligned');


    if (guessedNumber == chosenNumber) {
        alert(`Parabéns ${player}, você acertou !!`);
        document.getElementById('gamebox').innerHTML = '';
    }
    else if (guessedNumber < chosenNumber) {
        document.getElementById('guesstype').innerHTML = '<img src="cima.png" width="220" height="220"/>'
        on++;
        button.innerHTML = "Proximo turno!";
        button.setAttribute('onclick', `gameStart(${on}, ${chosenNumber})`);
    }
    else {
        document.getElementById('guesstype').innerHTML = '<img src="baixo.png" width="220" height="220" />'
        on++;
        button.innerHTML = "Proximo turno!";
        button.setAttribute('onclick', `gameStart(${on}, ${chosenNumber})`);
    }
}