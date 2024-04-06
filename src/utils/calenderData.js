import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
// import weekYear from 'dayjs/plugin/weekYear';
dayjs.extend(weekOfYear)
// dayjs.extend(weekYear)


export const days = ["S", "M", "T", "W", "T", "F", "S"];
export const months= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
export const currentDate = dayjs(); 
export const currentYear = currentDate.year(); 
export const currentMonthIndex = currentDate.month(); 

export const generateDate = ( month = dayjs().month(), year = dayjs().year() ) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfMonthDate = [];

  // pushing prefix dates into array
  for (let i = 0; i < firstDateOfMonth.day(); i ++) {
    arrayOfMonthDate.push(
      {
        date: firstDateOfMonth.day(i),
        currentMonth: false
      }
    );
  }
  
  // pushing current dates into array
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfMonthDate.push(
      {
        date: firstDateOfMonth.date(i), 
        currentMonth: true,
        today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString(),
      }
    );
  }

  // pushing suffix dates into array
  const remaining = 42 - arrayOfMonthDate.length;
  for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++) {
    arrayOfMonthDate.push(
      {
        date: firstDateOfMonth.date(i),
        currentMonth: false
      }
    );
  }

  // returning the array
  return {
    arrayOfMonthDate: arrayOfMonthDate,
  }
}

export const generateWeekDate = ( week = dayjs().week(), month = dayjs().month(), year = dayjs().year() ) => {  
  // const firstDateOfWeek = dayjs().year(year).month(month).week(week).startOf("week");
  // const lastDateOfWeek = dayjs().year(year).month(month).week(week).endOf("week");
  const dateOfWeek = dayjs().year(year).month(month).week(week);

  const arrayOfWeekDate = [];
  
  // pushing date into array
  for (let i = 0; i < 7; i++) {
    arrayOfWeekDate.push(
      {
        date: dateOfWeek.day(i).date(),
        today: dateOfWeek.day(i).toDate().toDateString() === dayjs().toDate().toDateString(),
      }
    );
  }
  
  // returning the array
  return {
    arrayOfWeekDate: arrayOfWeekDate,
  }
}