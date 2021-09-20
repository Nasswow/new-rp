import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./DailyInfo.css";
const DailyInfo = () => {
  const now = new Date();
  const [time, setTime] = useState(now);
  const [day, setDay] = useState(now);
  const today = now.getDay();
  const dayOfMonth = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hour = now.getHours();
  let minute;
  if (now.getMinutes() < 10) {
    minute = `0${now.getMinutes()}`;
  } else {
    minute = now.getMinutes();
  }
  const second = now.getSeconds();
  let newSecond;
  if (second < 10) {
    newSecond = `0${second}`;
  } else {
    newSecond = second;
  }
  let dayOfweek = "";
  switch (today) {
    case 0:
      dayOfweek = "Sunday";
      break;
    case 1:
      dayOfweek = "Monday";
      break;
    case 2:
      dayOfweek = "Tuesday";
      break;
    case 3:
      dayOfweek = "Wednesday";
      break;
    case 4:
      dayOfweek = "Thursday";
      break;
    case 5:
      dayOfweek = "Friday";
      break;
    case 6:
      dayOfweek = "Saturday";
      break;
    default:
      break;
  }
  let monthOfYear = "";
  switch (month) {
    case 0:
      monthOfYear = "January";
      break;
    case 1:
      monthOfYear = "February";
      break;
    case 2:
      monthOfYear = "March";
      break;
    case 3:
      monthOfYear = "April";
      break;
    case 4:
      monthOfYear = "May";
      break;
    case 5:
      monthOfYear = "June";
      break;
    case 6:
      monthOfYear = "July";
      break;
    case 7:
      monthOfYear = "August";
      break;
    case 8:
      monthOfYear = "September";
      break;
    case 9:
      monthOfYear = "October";
      break;
    case 10:
      monthOfYear = "November";
      break;
    case 11:
      monthOfYear = "December";
      break;
    default:
      break;
  }
  console.log(today);

  const test = new Date();
  console.log(test.getDay());
  const dayInfo = `${dayOfweek} ${monthOfYear} ${dayOfMonth}, ${year} `;
  const timeInfo = `${hour}:${minute}:${newSecond}`;
  useEffect(() => {
    setInterval(() => {
      setDay(dayInfo);
      setTime(timeInfo);
    }, 1000);
  }, [dayInfo, timeInfo]);
  return (
    <div className="dailyInfo-container">
      <div className="dailyInfo-day">{dayInfo}</div>
      <div className="dailyInfo-time">{timeInfo}</div>
    </div>
  );
};

export default DailyInfo;
