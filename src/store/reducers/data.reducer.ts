import { dataConstants } from '../constants/data.constants';
import { AnyAction } from 'redux';
import { DataState } from '../../interfaces/dataState.interface';

const initialState: DataState = {
  isLoading: false,
  items: {
    data: [],
    extendedData: [],
  },
  error: '',
};

export function dataReducer(state: DataState = initialState, action: AnyAction): DataState {
  switch (action.type) {
    case dataConstants.FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case dataConstants.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: {
          ...state.items,
          data: action.data,
        },
      };
    case dataConstants.FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case dataConstants.FETCH_EXTENDED_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case dataConstants.FETCH_EXTENDED_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: {
          ...state.items,
          extendedData: action.data,
        },
      };
    case dataConstants.FETCH_EXTENDED_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
