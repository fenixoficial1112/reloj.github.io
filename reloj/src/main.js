const fecha= document.getElementById('fecha');
const hora = document.getElementById('hora');


function runClock(){
    let f = new Date();
    
    let day = f.getDate();
    let weekday = f.getDay() ;
    let month = f.getMonth() +1;
    let year = f.getFullYear();


    day = ('0' + day).slice(-2);
    month = ('0' + month).slice(-2);

    let time = f.toLocaleTimeString();

    let diaSemana = ['SUN', 'MON', 'TUS', 'WED', 'THU', 'FRI', 'SAT'];
    let showSemana = (diaSemana[weekday]);

    
    

    hora.innerHTML = time;
    fecha.innerHTML = `${year} - ${month} - ${day}  ${showSemana}`

};



setInterval(runClock), 1000;