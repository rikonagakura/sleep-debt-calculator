const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 9;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 6;
      break;
    case 'sunday':
      return 7;
      break;
    default:
      return 'Error!';
      break;
  }
}

const getActualSleepHours = ()=> {
  return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
}

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === getIdealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > getIdealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
}

calculateSleepDebt();
