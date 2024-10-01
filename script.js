// Main JavaScript File 

const buttons = document.querySelectorAll('.nav-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        const contentId = button.dataset.content;
        const allContents = document.querySelectorAll('.content-item');
        allContents.forEach(content => content.style.display = 'none');
        document.getElementById(contentId).style.display = 'block';
    });
});

var timerElement = document.getElementById('timer');
var startDate = new Date('2024-10-01T09:30:00');
function formatTimeUnit(timeUnit) {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit; 
}
function updateTimer() {
    var currentTime = new Date();
    var timeDifference = currentTime - startDate;
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    timeDifference -= days * (1000 * 60 * 60 * 24);
    var hours = Math.floor(timeDifference / (1000 * 60 * 60));
    timeDifference -= hours * (1000 * 60 * 60);
    var minutes = Math.floor(timeDifference / (1000 * 60));
    timeDifference -= minutes * (1000 * 60);
    var seconds = Math.floor(timeDifference / 1000);
    timerElement.textContent = '本网站已正常运行' +
        days + '天' +
        formatTimeUnit(hours) + '小时' +
        formatTimeUnit(minutes) + '分钟' +
        formatTimeUnit(seconds) + '秒!';
}
setInterval(updateTimer, 1000);
updateTimer();
