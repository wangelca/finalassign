/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dayRate = 35;
let selectDays = 0;
let totalCost = 0;
const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const fullDay = document.getElementById("full");
const halfDay = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function updateTotal() {
    calculatedCost.textContent = totalCost;
}
function updateDay(action) {
    selectDays += action === "add" ? 1 : -1;
    totalCost += dayRate * (action === "add" ? 1 : -1);
    updateTotal();
}
weekDays.forEach(function (day) {
    const dayID = document.getElementById(day);

    dayID.addEventListener("click", function () {
        if (!dayID.classList.contains("clicked")) {
            dayID.classList.add("clicked");
            updateDay("add");
        } else {
            dayID.classList.remove("clicked");
            updateDay("remove");
        }
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", function () {
    weekDays.forEach(function (day) {
        const dayID = document.getElementById(day);
        dayID.classList.remove("clicked");
    });
    selectDays = 0;
    totalCost = 0;
    updateTotal();
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
halfDay.addEventListener("click", function () {
    dayRate = 20;
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    totalCost = selectDays * dayRate;
    updateTotal();
});

fullDay.addEventListener("click", function () {
    dayRate = 35;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    totalCost = selectDays * dayRate;
    updateTotal();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateTotal()
calculatedCost.textContent = totalCost;
