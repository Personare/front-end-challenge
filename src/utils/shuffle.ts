/* eslint-disable @typescript-eslint/no-explicit-any */

const shuffle = (array: Array<any>) =>
  array.sort(() => Math.random() - 0.5).slice();

export default shuffle;
