import _ from 'lodash';

export const getErrorMessage = (e: Error | string) => {
  if (e && _.isString(e)) return e;
  let errMsg = _.get(e, 'response.data', '');
  if (!errMsg && e instanceof Error) errMsg = e.message;
  return errMsg;
};

export const printErrorMessage = (
  e: Error | string,
  { title = 'Oops, something is wrong...' } = {}
) => {
  const errorMessage = getErrorMessage(e);
  console.log('printErrorMessage: ', { message: errorMessage, title });
};
