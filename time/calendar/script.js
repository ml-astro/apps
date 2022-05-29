function monthName(number){
    switch (number) {
        case 0:
            return 'Январь'
        break;
        case 1:
            return 'Февраль'
        break;
        case 2:
            return 'Март'
        break;
        case 3:
            return 'Апрель'
        break;
        case 4:
            return 'Май'
        break;
        case 5:
            return 'Июнь'
        break;
        case 6:
            return 'Июль'
        break;
        case 7:
            return 'Август'
        break;
        case 8:
            return 'Сентябрь'
        break;
        case 9:
            return 'Октябрь'
        break;

        case 10:
            return 'Ноябрь'
        break;
        case 11:
        return 'Декабрь'
        break;
    }
}
const month = document.querySelector('.month');
const monthHeader = document.querySelector('.header');
const today = new Date();
const tableHead = today.getMonth();
const firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
let firstWeekDay = firstDate.getDay();
if(firstWeekDay == 0) {
    firstWeekDay = 7;
}

//get first monday date for calendar
let daysOffset = (-1)*(firstWeekDay-2);
let myDate = new Date(today.getFullYear(), today.getMonth(), daysOffset);

monthHeader.innerHTML+=monthName(tableHead).toUpperCase();

for (let index = 0; index < 42; index++) {
    let date = new Date(today.getFullYear(), today.getMonth(), daysOffset);
    let item = document.createElement('div');
    item.className = 'day';
    if (date.getMonth() != today.getMonth()) {
        item.classList.add('differentMonth');
    }
    if ((date.getDate() == today.getDate()) && (date.getMonth() == today.getMonth())){
        item.classList.add('today')
    }
    item.innerHTML = `<p>${date.getDate()}</p>`;
    document.querySelector('.month').append(item);
    daysOffset++;
}

