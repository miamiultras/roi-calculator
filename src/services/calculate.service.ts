import { Form } from '../interfaces/form.interface';
import { data, extendedData } from '../mocks/data.mock';

function post(form: Form, ext: boolean = false) {
  const source = ext ? extendedData : data;

  // simulate ok response from server
  const status = 'ok';
  return new Promise((resolve, reject) => {
    // simulate server delay
    setTimeout(
      () => {
        if (status === 'ok') {
          resolve({ data: source });
        } else {
          reject('error');
        }
      },
      2000);
  });
}

function calculateData(form: Form) {
  return post(form);
}

function calculateExtendedData(form: Form) {
  return post(form, true);
}

export const calculateService = {
  calculateData,
  calculateExtendedData,
};
