import { useEffect, createContext, useState } from "react";
import "./App.css";
import Aside from "./components/Aside/Aside";
import { Comments } from "./components/Comments/Comments";
import { Items } from "./components/Items/Items";
import { useGetItemsStorage } from "./hooks/useGetItemsStorage";

export const CurrentIdContext = createContext();

function App() {
  const [id, setId] = useState(null);

  const [items, setItems] = useState([]);

  const getItems = () => {
    const itemsStorage = localStorage.getItem("items");
    if (itemsStorage) {
      setItems(JSON.parse(itemsStorage));
    }
  };

  const [comments, setComments] = useState([]);

  const getItemsStorageAndFind = () => {
    const items = localStorage.getItem("items");
    const parseItems = JSON.parse(items);
    const findItem = parseItems.find((item) => item.id === id);
    return findItem;
  };

  const getComments = () => {
    const getComments = getItemsStorageAndFind();
    if (getComments) {
      setComments(getComments.comments);
    } else {
      setComments([]);
    }
  };

  const chekStorage = () => {
    const chek = localStorage.getItem("items");
    return chek;
  };

  const createStorage = () => {
    if (!chekStorage()) {
      localStorage.setItem("items", JSON.stringify([]));
    }
  };

  const getItemsStorage = useGetItemsStorage;

  const setNewId = () => {
    const items = getItemsStorage();
    if (items.length) {
      setId(items[0].id);
    } else {
      setId(null)
    }
  };

  useEffect(() => {
    createStorage();
    setNewId();
    getItems();
    getComments();
  }, []);

  const updateId = (newId) => {
    setId(newId);
  };

  return (
    <div className="App">
      <Aside />
      <main className="main">
        <div className="wrapper-content">
          <CurrentIdContext.Provider
            value={{
              id,
              updateId,
              setNewId,
              items,
              getItems,
              comments,
              getComments,
            }}
          >
            <Items />
            <Comments />
          </CurrentIdContext.Provider>
        </div>
      </main>
    </div>
  );
}

export default App;
