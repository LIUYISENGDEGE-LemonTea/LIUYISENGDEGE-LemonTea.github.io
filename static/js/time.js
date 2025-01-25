var timerElement = document.getElementById('timer');
var startDate = new Date('2025-01-25T12:00:00');
function formatTimeUnit(timeUnit) {
  // 将时间单位转换为两位数的格式
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