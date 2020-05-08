const m = moment();
const displayCurrentTimeAndDay = function () {
    const currentday = m.format("LLL");
    console.log(m.hour())
    $("#currentdayview").append(currentday);
}
displayCurrentTimeAndDay();


const currentTime = parseInt(m.format("HH00"), 10);
for (let i = 0; i < $(".hour").length; i++) {
    let currentDiv = $($(".hour")[i]).next();
    let dataTime = parseInt($($(".hour")[i]).data().time, 10);
    if (dataTime < currentTime) {
        currentDiv.addClass("past");
    } else if (dataTime > currentTime) {
        currentDiv.addClass("future");
    } else {
        currentDiv.addClass("present");
    }
}

$(".saveBtn").on("click", function () {
    const userEvent = $(this).prev().val();
    const btn = $(this).val()
    localStorage.setItem(btn, userEvent);
    render();
})

function render() {
    for (let i = 0; i < 9; i++) {
        const oneEvent = localStorage.getItem(i);
        $("#" + i).text(oneEvent);
    }
}

$(document).ready(render());