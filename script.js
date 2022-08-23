const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");
const monthInx = new Date();
let month = monthInx.getMonth();
const lastDay = new Date(new Date().getFullYear(), month+1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), month , 1).getDay() - 1;
// console.log(firstDay);
// const monthInx = new Date().getMonth;
// monthInx.getMonth;
// console.log(month);
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// console.log(months[monthInx]);

// console.log(months[month]);
monthEl.innerText = months[month];
fullDateEl.innerText = new Date().toDateString();

// monthEl.innerText = monthInx;
// monthEl.innerText = months [monthInx];

let days = "";
for(let i = firstDay; i > 0; i--)
{
    days += `<div class="empty"></div>`;
}
for(let i = 1; i <= lastDay; i++)
{
    if (i === new Date().getDate())
    {
        days += `<div class="today">${i}</div>`;
    }
    else{
        days += `<div>${i}</div>`;
    }
}
daysEl.innerHTML = days;