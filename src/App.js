import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [data, setData] = useState([]);
  const addNewItem = (newItem) => {
    setData((prevData) => [newItem, ...prevData]);
  };

  return (
    <>
    <Header/>
      <Form />
    </>
  );
}

export default App;
