import { Service } from './service.interface';

export interface DataState {
  isLoading: boolean;
  items: {
    data: Service[],
    extendedData: Service[],
  };
  error: string;
}
