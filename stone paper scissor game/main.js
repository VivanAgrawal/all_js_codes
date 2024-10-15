function play(user) {
    let choices = ['stone', 'paper', 'scissor'];
    let Bot = choices[Math.round(Math.random() * 2)];
    let result = ''; 
    if (user === Bot) {
        result = 'Tie';
    } else if (user == 'stone' & Bot == 'scissor') {
        result = 'You Win!';
    } else if (user == 'paper' & Bot == 'stone') {
        result = 'You Win!';
    } else if (user == 'scissor' & Bot == 'paper') {
        result = 'You Win!';
    } else {
        result = 'You Lose!';
    }

    alert('You: ' + user + ', Bot: ' + Bot + ' - ' + result);
}
