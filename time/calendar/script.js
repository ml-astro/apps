const today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth();
var monthToDisplay = new Date(currentYear,currentMonth,1);
document.addEventListener('load',makeCalendar(monthToDisplay));

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

function stepMonth(n){
    monthToDisplay.setMonth(monthToDisplay.getMonth()+n);
    makeCalendar(monthToDisplay);
}


function makeCalendar(month){
    const firstMonthDate = new Date(month.getFullYear(), month.getMonth(), 1);
    const monthContainer = document.querySelector('.calendar');
    monthContainer.innerHTML=`
    <div class="header"></div>
    <div class="weekdays">ПН</div>
    <div class="weekdays">ВТ</div>
    <div class="weekdays">СР</div>
    <div class="weekdays">ЧТ</div>
    <div class="weekdays">ПТ</div>
    <div class="weekdays">СБ</div>
    <div class="weekdays">ВС</div>`;
    const monthHeader = document.querySelector('.header');

    let firstWeekDay = firstMonthDate.getDay();
    if(firstWeekDay == 0) {
        firstWeekDay = 7;
    }

    //get first monday date for .calendar
    let daysOffset = (-1)*(firstWeekDay-2);

    monthHeader.innerHTML+=`<div class="step" onclick='stepMonth(-1)'><</div>`;
    monthHeader.innerHTML+=monthName(month.getMonth()).toUpperCase() + ' ' + month.getFullYear();
    monthHeader.innerHTML+=`<div class="step" onclick='stepMonth(+1)'>></div>`;

    for (let index = 0; index < 42; index++) {
        let date = new Date(month.getFullYear(), month.getMonth(), daysOffset);
        let item = document.createElement('div');
        item.className = 'day';
        if (date.getMonth() != month.getMonth()) {
            item.classList.add('differentMonth');
        }

        if ((date.getDate() == today.getDate()) && (date.getMonth() == today.getMonth()) && (date.getFullYear() == today.getFullYear())){
            item.classList.add('today')
        }
        item.innerHTML = `<p>${date.getDate()}</p>`;
        monthContainer.append(item);
        daysOffset++;
    }
    }

