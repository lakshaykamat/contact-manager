import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ContactCard from "./components/ContactCard";
import ContactPage from "./components/ContactPage";
import Form from "./components/Form";
import Navbar from "./components/NavBar";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [contactList, setContactList] = useState([]);
  const [contactDetail, setContactDetail] = useState({
    name: "",
    number: "",
  });
  const [alert, setAlert] = useState(false);
  function handleAlert() {
    setAlert(true);
  }
  function handleChange(e) {
    setContactDetail((prevDetail) => {
      return {
        ...prevDetail,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleContactList() {
    setAlert(true)
    setInterval(() => {
      setAlert(false)
    },2000);
    setContactList((prevList) => {
      return [...prevList, contactDetail];
    });
    setContactDetail({ name: "", number: "" });
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Navbar
                icon={<ListIcon />}
                path={"/contacts"}
                status="Show Contacts"
              />
              <Form
                alert={alert}
                handleContactList={handleContactList}
                handleChange={handleChange}
                name={contactDetail.name}
                number={contactDetail.number}
              />
            </>
          }
        />
        <Route
          path="/contacts"
          exact
          element={
            <>
              <Navbar icon={<AddIcon />} path={"/"} status="Add" />
              <ContactPage contacts={contactList} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
