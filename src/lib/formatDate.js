import { unitStrings } from '.././constants/unitStrings';

export function formatDate(dateString) {
  const date = new Date(dateString);
  const currentDate = new Date();
  const difference = currentDate - date;
  const diffInMinutes = Math.floor(difference / 1000 / 60);

  if (diffInMinutes < 60) {
    const unitString = getUnitString(diffInMinutes, 'minutes');
    return `${diffInMinutes} ${unitString} назад`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);

  if (diffInHours < 24) {
    const unitString = getUnitString(diffInHours, 'hours');
    return `${diffInHours} ${unitString} назад`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  const unitString = getUnitString(diffInDays, 'days');
  return `${diffInDays} ${unitString} назад`;
}

function getUnitString(number, unitType) {
  const lastDigit = number % 10;
  let unitCountRange;

  if (lastDigit === 1) {
    unitCountRange = 'one';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    unitCountRange = 'fromTwoToFour';
  } else {
    unitCountRange = 'fromFive';
  }

  return unitStrings[unitType][unitCountRange];
}
