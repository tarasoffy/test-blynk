export const useGetItems = (setItems) => {
    const itemsStorage = localStorage.getItem("items");
    if (itemsStorage) {
      setItems(JSON.parse(itemsStorage));
    }
  };