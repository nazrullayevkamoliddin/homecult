export const textSlice = (text: string, maxNumber: number) =>
  text?.length < maxNumber ? text : `${text.slice(0, maxNumber)}...`;
