import { Form } from '../interfaces/form.interface';
import { data, extendedData } from '../mocks/data.mock';

function calculate(form: Form) {
  // return of investment calculation
  const { qualityLevel, estimatedSellInput, pricePerTicket } = form;

  return new Promise((resolve, reject) => {
    // simulate server
    setTimeout(() => {
      resolve({ data, extendedData });
    },         2000);
  });
}

export const calculateService = {
  calculate,
};
