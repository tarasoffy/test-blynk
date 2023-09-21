export const useGetItemsStorage = () => {
  const items = localStorage.getItem("items");
  const parseItems = JSON.parse(items);
  return parseItems;
};
