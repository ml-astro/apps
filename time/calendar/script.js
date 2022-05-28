const month = document.querySelector('.month');
const monthHeader = document.querySelector('.header');
var today = new Date();
var tableHead = today.getMonth()+1;
var firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
var lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0);
var firstWeekDay = firstDate.getDay();
if(firstWeekDay == 0) {
    firstWeekDay = 7;
}

function monthName(number){
    switch (number) {
        case 1:
            return 'Январь'
        break;
        case 2:
            return 'Февраль'
        break;
        case 3:
            return 'Март'
        break;
        case 4:
            return 'Апрель'
        break;
        case 5:
            return 'Май'
        break;
        case 6:
            return 'Июнь'
        break;
        case 7:
            return 'Июль'
        break;
        case 8:
            return 'Август'
        break;
        case 9:
            return 'Сентябрь'
        break;
        case 10:
            return 'Октябрь'
        break;

        case 11:
            return 'Ноябрь'
        break;
        case 12:
        return 'Декабрь'
        break;
    }
}

monthHeader.innerHTML+=monthName(tableHead).toUpperCase();

for (let index = 0; index < 42; index++) {
    month.innerHTML+=`<div class="day"></div>`
}

var dayTiles = document.querySelectorAll('.day');
let dateNumber = 1;

for (let index = 0; index < dayTiles.length; index++) {
    if((index >= firstWeekDay-1) && (dateNumber <= lastDate.getDate())){
        dayTiles[index].innerHTML=`<p>${dateNumber}</p>`;
        dateNumber++;
    }
    else {
        dayTiles[index].className = "differentMonth";
    }
}