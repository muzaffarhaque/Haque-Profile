window.onscroll = function() {
    scrollFunction()
};

var La = 0;

function scrollFunction() {
    if (window.innerWidth > 700) {
        var scroll_current = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scroll_current)

        if (scroll_current > La) {
            document.querySelector(".main-header").style.left = "-100%";
        } else {

            document.querySelector(".main-header").style.left = "0px";
            hedad.style.transform = "translateX(00%)";

        }

        La = scroll_current;
        console.log(La, "after")
    }
}

function linkdin() {
    window.open("https://www.linkedin.com/in/mohammad-muzaffarul-haque-541b761b1/")
    // location.href="https://github.com/muzaffarhaque";
}
function github() {
    window.open('https://github.com/muzaffarhaque')
}

function showMessage() {
    alert("Error, Please reach out to us via email. (muzaffarhaque777@gmail.com)");
}
