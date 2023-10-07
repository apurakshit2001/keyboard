let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (KeyBoard) => {

        if (KeyBoard.target.innerHTML == 'Backspace') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else if (KeyBoard.target.innerHTML == 'Space') {
            string = ""
            document.querySelector('input').value = string;
        }
    
        else {
            string = string + KeyBoard.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})