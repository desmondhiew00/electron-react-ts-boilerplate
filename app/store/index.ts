// eslint-disable-next-line import/prefer-default-export
import { store } from '@app/index';

export * from './store.types';
export const { dispatch } = store;
export { store };
