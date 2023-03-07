import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import Form from "./components/Form";
import Navbar from "./components/NavBar";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";
import { imgaesData } from "./assets/ImageData";

function App() {
  const [alert, setAlert] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [contactList, setContactList] = useState([]);
  const [contactDetail, setContactDetail] = useState({
    name: "",
    number: "",
    img: undefined,
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
    setAlert(true)
    setSelectedImage(null)
    setInterval(() => {
      setAlert(false)
    },2000);
    setContactList((prevList) => {
      return [...prevList, contactDetail];
    });
    setContactDetail({ name: "", number: "" ,img:""});
  }
  const handleImageClick = (image) => {
    setContactDetail((prevDetail) => {
      return {
        ...prevDetail,
        img: image.url,
      };
    });
setSelectedImage(image)
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Navbar icon={<ListIcon />} path={"/contacts"} />
              <Form
                imagesData={imgaesData}
                alert={alert}
                selectedImage={selectedImage}
                handleImageClick={handleImageClick}
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
              <Navbar icon={<AddIcon />} path={"/"} />
              <ContactPage contacts={contactList} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
