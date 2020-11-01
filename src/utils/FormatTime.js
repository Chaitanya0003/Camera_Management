
import moment from 'moment';

export const formatDate = (date) => {

  const lastActivity = moment(date);
  const now = moment();
  
  // years, months, days, hours, minutes, and seconds
  const years = now.diff(lastActivity, 'years');
  const months = now.diff(lastActivity, 'months');
  const days = now.diff(lastActivity, 'days');
  const hours = now.diff(lastActivity, 'hours');
  const minutes = now.diff(lastActivity, 'minutes');
  const seconds = now.diff(lastActivity, 'seconds');

  let output = '';
  if ( seconds < 60){
      output = `Just Now`;
  }
  else if (minutes < 60){
      output =  (minutes > 1 ? `${minutes} minutes ago` : `${minutes} minute ago` );
  }
  else if ( hours < 24){
      output = (hours>1 ? `${hours} hours ago` : `${hours} hour ago`); 
  }
  else if ( days < 31){
      output = (days>1 ? `${days} days ago` : `${days} day ago`);
  }
  else if ( months < 12){
      output = (months>1 ? `${months} months ago` : `${months} month ago`);;
  }
  else if ( years > 0){
      output = (years>1 ? `${years} years ago` : `${years} year ago`);
  }
  
  return output;
}