function play(choice) {
  let playerChoice = choice;
  let compChoice = Math.floor(Math.random() * 3 + 1);
  document.getElementById('result').innerText="Computer is deciding...";  
  let wins = sessionStorage.getItem("winCount");
  let losses = sessionStorage.getItem("lossCount");
  let ties = sessionStorage.getItem("tiesCount");
  if (wins == null) {
      wins = 0;
    } else {
      wins = wins;
    };
    if (ties == null) {
      ties = 0;
    } else {
      ties = ties;
    };
    if (losses == null) {
      losses = 0;
    } else {
      losses = losses; 
  };
  setTimeout(() => {
      switch (compChoice) {
        case 1:
          document.getElementById('dot-img').src = "svg/rock.svg";
          switch (playerChoice) {
            case 1: 
              document.getElementById('result').innerHTML = "Rock Ties Rock";
              document.getElementById('verdict').style.color = 'black';
              document.getElementById('verdict').innerHTML = "Tie";
              ++ties;
              break;
            case 2: 
              document.getElementById('result').innerHTML = "Paper Wins Rock";
              document.getElementById('verdict').style.color = 'green';
              document.getElementById('verdict').innerHTML = "Win";
              ++wins;
              break;
            case 3: 
              document.getElementById('result').innerHTML = "Scissors Loses Rock";
              document.getElementById('verdict').style.color = 'red';
              document.getElementById('verdict').innerHTML = "Loss";
              ++losses;
              break;
          }
          break;
        case 2:
          document.getElementById('dot-img').src = "svg/paper.svg";
          switch (playerChoice) {
            case 1: 
              document.getElementById('result').innerHTML = "Rock Loses Paper";
              document.getElementById('verdict').style.color = 'red';
              document.getElementById('verdict').innerHTML = "Loss";
              ++losses;
              break;
            case 2: 
              document.getElementById('result').innerHTML = "Paper Ties Paper";
              document.getElementById('verdict').style.color = 'black';
              document.getElementById('verdict').innerHTML = "Tie";
              ++ties;
              break;
            case 3: 
              document.getElementById('result').innerHTML = "Scissors Wins Paper";
              document.getElementById('verdict').style.color = 'green';
              document.getElementById('verdict').innerHTML = "Win";
              ++wins;
              break;
          }
          break;
        case 3:
          document.getElementById('dot-img').src = "svg/scissors.svg";
          switch (playerChoice) {
            case 1: 
              document.getElementById('result').innerHTML = "Rock Wins Scissors";
              document.getElementById('verdict').style.color = 'green';
              document.getElementById('verdict').innerHTML = "Win";
              ++wins;
              break;
            case 2: 
              document.getElementById('result').innerHTML = "Paper Loses Scissors";
              document.getElementById('verdict').style.color = 'red';
              document.getElementById('verdict').innerHTML = "Loss";
              ++losses;
              break;
            case 3: 
              document.getElementById('result').innerHTML = "Scissors Ties Scissors";
              document.getElementById('verdict').style.color = 'black';
              document.getElementById('verdict').innerHTML = "Tie";
              ++ties;
              break;
          }
          break;
      }
      sessionStorage.setItem("winCount", wins);
      sessionStorage.setItem("tiesCount", ties);
      sessionStorage.setItem("lossCount", losses);
      document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
      document.getElementById('ties').innerHTML = sessionStorage.getItem("tiesCount");
      document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
  }, 300)
}

function reset() {
sessionStorage.setItem("winCount", 0);
sessionStorage.setItem("tiesCount", 0);
sessionStorage.setItem("lossCount", 0);
document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
document.getElementById('ties').innerHTML = sessionStorage.getItem("tiesCount");
document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
document.getElementById('dot-img').src = "svg/dot.svg";
document.getElementById('result').innerHTML = "Result";
document.getElementById('verdict').innerHTML = "";
document.getElementById('verdict').style.color = 'black';
}