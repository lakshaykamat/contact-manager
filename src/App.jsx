import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactCard from "./components/ContactCard";
import ContactPage from "./components/ContactPage";
import Form from "./components/Form";

function App() {
  const [contactList, setContactList] = useState([]);
  const [contactDetail, setContactDetail] = useState({
    name: "",
    number: "",
  });
  function handleChange(e) {
    setContactDetail((prevDetail) => {
      return {
        ...prevDetail,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleContactList() {
    setContactList((prevList) => {
      return [...prevList, contactDetail];
    });
    setContactDetail({name: "",number: "",});
    // document.getElementById("name").value = "";
    // document.getElementById("number").value = "";
  }
  return (
    <div>
      <Routes>
        <Route
        path="/"
        exact
        element={<Form
          contactList={contactList}
          handleContactList={handleContactList}
          handleChange={handleChange}
          contactDetail={contactDetail}
          />}/>
          <Route
          path="/contacts"
          exact
          element={<ContactPage 
          contacts={contactList}/>}/>
      
        </Routes>
    </div>
  );
}

export default App;
