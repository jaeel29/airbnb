export const priceTransfom = (str: string) => {
  const [price, mode] = str.split(' / ');

  return [price, mode];
};
