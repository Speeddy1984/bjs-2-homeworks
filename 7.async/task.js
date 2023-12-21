class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    const isAlarmPresent = this.alarmCollection.some(
      (element) => element.time === time
    );
    if (isAlarmPresent) {
      console.warn("Уже присутствует звонок на это же время");
    } else {
      this.alarmCollection.push({
        time,
        callback,
        canCall: true,
      });
    }
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (element) => element.time !== time
    );
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    } else {
      hours = String(hours);
    }

    const minutes = String(currentDate.getMinutes());
    if (minutes < 10) {
      minutes = "0" + minutes;
    } else {
      hominutesurs = String(minutes);
    }

    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
