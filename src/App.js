import "./styles/App.scss";
import appContext from "./context";
import MainItem from "./components/MainItem/MainItem";
import itemsData from "./data/items.json";

function App() {
  const store = { ids: [], entities: {} };
  itemsData.forEach((item) => {
    store.entities[item.id] = item;
    store.ids.push(item.id);
  });
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <appContext.Provider value={{ store, publicUrl }}>
      <div className="main">
        <div className="main__content">
          <h1 className="main__title">Ты сегодня покормил кота?</h1>
          <div className="main__goods">
            {store.ids.map((id) => (
              <MainItem key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </appContext.Provider>
  );
}

export default App;
