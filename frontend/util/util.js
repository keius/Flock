import moment from 'moment';

export function processDate(datetime) {
  const date = new Date(datetime);
  return moment(date).format('LLL');
}

export function processShortDate(datetime) {
  const date = new Date(datetime);
  return moment(date).format('MMM D');
}
