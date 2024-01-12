export const typeChange = (
  option: string | undefined,
  type: string | undefined
) => {
  if (option) {
    return option === 'id' ? 'number' : 'text';
  } else {
    return type;
  }
};
