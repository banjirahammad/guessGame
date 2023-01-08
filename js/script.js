

let start = document.querySelector('#start');

//UI class
class UI{
    static showAlert(message, className){
        let div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        let notification = document.querySelector('#notification');
        notification.append(div);
        // setTimeout( () => {
        //     document.querySelector('.alert').remove();
        // },3000);
    }

    static clearField(){
        document.querySelector('#notification').innerHTML = '';
    }

}

// add event listener
start.addEventListener('click',startGame);

//functions

function startGame(){
    UI.clearField();
    let low = 1;
    let high = 10;
    let correcr_ans   = Math.floor(Math.random() * (high - low) + low);
    let i=3;
    let text = 'Guese a number between 1 to 10. You have 3 chance';
    UI.clearField();
    while(i>0){
        let num = prompt(text,'enter a number...');
        if(num==correcr_ans ){
            UI.showAlert(`You Win`,'success');
            start.innerHTML = 'Play again';
            break;
        }
        else if(num>correcr_ans ){
            text = `Correct answer is smaller! you have ${--i} more chance`;
        }
        else{
            text = `Correct answer is greater! you have ${--i} more chance`;
        }
    }
    if(i==0){
        UI.clearField();
        UI.showAlert(`You lose!`,'warning');
        start.innerHTML = 'Play again';
    }
}
