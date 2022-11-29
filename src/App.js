import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="login__header-container">
        {Array(10)
          .fill()
          .map(() => (
            <div className="image__diagonal">
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="picture"
              />
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="picture"
              />
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="picture"
              />
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="picture"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
