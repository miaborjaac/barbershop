import {DATE_FORMAT} from "./constants";
import moment from "moment";

export function isNullOrEmpty(value){
  return value === undefined || value === null || value === '' || value === 'null';
}

export function getDateFormat(date) {
  return moment(date).format(DATE_FORMAT);
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function getCurrencyFormat(value){
  const options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0 };
  const numberFormat = new Intl.NumberFormat('en-EN', options);

  return numberFormat.format(value);
}