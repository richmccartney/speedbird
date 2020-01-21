export const format = (first: any, middle: any, last: any): any => {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
}
