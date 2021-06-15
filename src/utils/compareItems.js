export const compareItems = items => {
  if (!Array.isArray(items) || items?.length !== 2) return null;
  if (!items[0]?.id || !items[1]?.id) return null;

  const isItemsEquals = items[0]?.id === items[1]?.id;

  return isItemsEquals;
};
