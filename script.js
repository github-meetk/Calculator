let buttons = document.querySelectorAll('.bt');

let string = "";

Array.from(buttons).forEach((x)=>{
    x.addEventListener('click', (e) => {
        console.log(e.target);
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = string.slice(0, -1); 
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'x'){
            string = string + '*';
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})