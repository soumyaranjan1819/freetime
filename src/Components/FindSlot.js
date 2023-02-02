import moment from "moment";
import { data } from "../Data/data";


function findAvailableTimes(start, end, duration, data) {
  let availableSlots = [];
  let current = moment(start);

  while (current < end) {
    let next = moment(current).add(duration, 'minutes');
    let slotIsAvailable = true;

    for (const event of data) {
      let eventStart = moment(event.start);
      let eventEnd = moment(event.end);
      if (next > eventStart && current < eventEnd) {
        slotIsAvailable = false;
        break;
      }
    }

    if (slotIsAvailable) {
      availableSlots.push({start: current.format(), end: next.format()});
    }

    current = moment(next);
  }

  return availableSlots;
}

const start = moment('Wed, 03 Mar 2021 06:30:15 GMT');
const end = moment('Wed, 03 Mar 2021 07:00:15 GMT');
const duration = 30;
const availableSlots = findAvailableTimes(start, end, duration, data);

console.log(availableSlots);