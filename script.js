// Main JavaScript File 

const buttons = document.querySelectorAll('.nav-btn');
const contentText = document.getElementById('text-content');
const indicator = document.querySelector('.indicator');

let activeButton = buttons[0];
updateIndicator(activeButton);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        activeButton = button;
        const contentId = button.dataset.content;
        const allContents = document.querySelectorAll('.content-item');
        allContents.forEach(content => content.style.display = 'none');
        document.getElementById(contentId).style.display = 'block';
        updateIndicator(activeButton);
    });
});

function updateIndicator(button) {
    const rect = button.getBoundingClientRect();
    const navbarRect = document.querySelector('.navbar').getBoundingClientRect();
    const offsetX = rect.left - navbarRect.left;
    const indicatorWidth = rect.width;
    const adjustment = 10; 
    indicator.style.transform = `translateX(${offsetX - adjustment}px)`; 
    indicator.style.width = `${indicatorWidth}px`;
}
document.addEventListener('DOMContentLoaded', () => {
    updateIndicator(activeButton);
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