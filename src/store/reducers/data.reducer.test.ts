import { AnyAction } from 'redux';
import { dataConstants } from '../constants/data.constants';
import { dataReducer } from './data.reducer';
import { DataState } from '../../interfaces/dataState.interface';

const initialState: DataState = {
  isLoading: false,
  items: {
    data: [],
    extendedData: [],
  },
  error: '',
};

describe('data reducer', () => {
  it('should return the initial state', () => {
    expect(dataReducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it('should set isLoading on true on FETCH_DATA', () => {
    expect(
      dataReducer(initialState, {
        type: dataConstants.FETCH_DATA,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should fetch all base data on FETCH_DATA_SUCCESS', () => {
    const dataMock = [
      { id: 1, name: '1', date: '2018-01-01' },
      { id: 2, name: '2', date: '2018-02-01' },
      { id: 3, name: '3', date: '2018-03-01' },
    ];
    expect(
      dataReducer(initialState, {
        data: dataMock,
        type: dataConstants.FETCH_DATA_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      items: {
        data: dataMock,
        extendedData: [],
      },
    });
  });

  it('should throw error on FETCH_DATA_FAILURE', () => {
    const error = 'error';
    expect(
      dataReducer(initialState, {
        error,
        type: dataConstants.FETCH_DATA_FAILURE,
      })
    ).toEqual({
      ...initialState,
      error,
      isLoading: false,
    });
  });
});
