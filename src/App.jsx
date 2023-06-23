import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, persistedStore } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
