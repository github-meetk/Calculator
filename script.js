let buttons = document.querySelectorAll('.bt');

let string = "";

Array.from(buttons).forEach((x)=>{
    x.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('.ip').innerHTML = string;
            string = "";
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('.ip').innerHTML = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = string.slice(0, -1); 
            document.querySelector('.ip').innerHTML = string;
        }
        else if(e.target.innerHTML == 'x'){
            string = string + '*';
            document.querySelector('.ip').innerHTML = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('.ip').innerHTML = string;
        }
    })
})

// For Theme Toggle

let toggle = document.querySelector('.theme');
let btn = document.querySelectorAll('.btn');
let sbtn = document.querySelector('.spec-btn');
let ip = document.querySelector('.ip');
let calbg = document.querySelector('.cal-bg');

toggle.addEventListener('click', (e)=> {
    sbtn.classList.toggle('spec-btn-d');
    ip.classList.toggle('ip-d');
    calbg.classList.toggle('cal-bg-d');
    Array.from(btn).forEach((b)=>{
        b.classList.toggle('btn-d');
    })
})


// For Keyboard functionality

 document.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(typeof(e.key));
    if(e.key == '1'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '2'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '3'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '4'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '5'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '6'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '7'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '8'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '9'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '0'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '.'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '+' && e.shiftKey){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '=' || e.key == 'Enter'){
        string = eval(string);
        document.querySelector('.ip').innerHTML = string;
        string = "";
    }
    else if(e.key == '-'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '*'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '/'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == '%'){
        string = string + e.key;
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == 'Backspace'){
        string = string.slice(0, -1); 
        document.querySelector('.ip').innerHTML = string;
    }
    else if(e.key == 'Delete'){
        string = ""
        document.querySelector('.ip').innerHTML = string;
    }
    
    

 })

