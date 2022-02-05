import React from "react";
import { Todo } from "./Src/Screen/Todo";
import {Provider} from "react-redux";
import store from "./Src/Redux/Store/store"
function App() {
  


 
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
    
   
  );
}
 
export default App;