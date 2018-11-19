import { dataConstants } from '../constants/data.constants';
import { calculateService } from '../../services/calculate.service';
import { Form } from '../../interfaces/form.interface';

export const dataActions = {
  getData,
  getExtendedData,
};

function getData(form: Form) {
  return (dispatch: any) => {
    dispatch(request());
    calculateService.calculateData(form)
      .then(
        (res: any) => {
          dispatch(success(res.data));
        },
        (error: Error) => {
          dispatch(failure(error.message));
        }
      );
  };

  function request() { return { type: dataConstants.FETCH_DATA }; }
  function success(data: any) { return { data, type: dataConstants.FETCH_DATA_SUCCESS }; }
  function failure(error: String) { return { error, type: dataConstants.FETCH_DATA_FAILURE }; }
}

function getExtendedData(form: Form) {
  return (dispatch: any) => {
    dispatch(request());
    calculateService.calculateExtendedData(form)
      .then(
        (res: any) => {
          dispatch(success(res.data));
        },
        (error: Error) => {
          dispatch(failure(error.message));
        }
      );
  };

  function request() { return { type: dataConstants.FETCH_EXTENDED_DATA }; }
  function success(data: any) { return { data, type: dataConstants.FETCH_EXTENDED_DATA_SUCCESS }; }
  function failure(error: String) { return { error, type: dataConstants.FETCH_EXTENDED_DATA_FAILURE }; }
}
