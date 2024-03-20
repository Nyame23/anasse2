// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

// date picker
$(function () {
    $("#inputDate").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

// owl carousel slider js
$('.team_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        576: {
            items: 2,
        },
        992: {
            items: 3
        }
    }
})


const counts = document.querySelectorAll('.count');
const speed = 97;

counts.forEach((counter) => {
    function update() {
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerText);
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.floor( count + increment);
            setTimeout(update, 1);
        } else {
            counter.innerText = target;
        }
    }

    update();
});