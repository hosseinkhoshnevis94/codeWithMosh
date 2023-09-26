import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Box from "./components/Box/Box";
import SecondBox from "./components/SecondBox/SecondBox";
import ThirdBox from "./components/ThirdBox/ThirdBox";
import TailwindList from "./components/TailwindBox/TailwindList";
import Like from "./components/Like/Like";
import Drink from "./components/Drink/Drink";
import Friuts from "./components/Friuts/Friuts";
import Bugs from "./components/Bugs/Bugs";
import ShoppingCardContainer from "./components/ShoppingCardContainer/ShoppingCardContainer";
import Person from "./components/Person/Person";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import Form from "./components/Form/Form";
import SecondForm from "./components/SecondForm/SecondForm";
import ThirdForm from "./components/ThirdForm/ThirdForm";
import Category from "./components/Category/Category";
import Users from "./components/Users/Users";

function App() {
  let cities: { id: number; name: string }[] = [
    { id: 1, name: "London" },
    { id: 2, name: "Amsterdam" },
    { id: 3, name: "Tokyo" },
    { id: 4, name: "Dubai" },
    { id: 5, name: "NewYork" },
  ];
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertCityName = (cityName: string) => alert(cityName);

  return (
    <>
      {/* <ListGroup
        cities={cities}
        heading="Cities"
        onAlert={handleAlertCityName}
      ></ListGroup>
      <hr />
      <Alert>
        <h1>Hello</h1>
        <span>World</span>{" "}
      </Alert>
      <hr />
      <Button>Test</Button>
      <Button color="light" onClick={() => alert("click!")}>
        click
      </Button>
      <Button color="success" outline onClick={() => alert("Yes!")}>
        Yes
      </Button>
      <Button color="danger" onClick={() => alert("Cancel!")}>
        Cancel
      </Button>
      <hr />
      {showAlert && (
        <Alert dismissable={true} onClose={() => setShowAlert(false)}>
          This is a TEST Alert!
        </Alert>
      )}
      <Button onClick={() => setShowAlert(true)}>
        {showAlert ? "Hide" : "Show"}
      </Button>
      <hr />
      <Box></Box>
      <hr />
      <SecondBox></SecondBox>
      <hr />
      <ThirdBox></ThirdBox>
      <hr />
      <TailwindList></TailwindList>
      <hr />
      <Like onClick={() => console.log("like")}></Like>
      <hr />
      <Drink></Drink>
      <hr />
      <Friuts></Friuts>
      <hr />
      <Bugs></Bugs>
      <hr />
      <ShoppingCardContainer></ShoppingCardContainer>
      <hr />
      <Person></Person>
      <hr />
      <ExpandableText></ExpandableText>
      <hr />
      <Form></Form>
      <hr />
      <SecondForm></SecondForm>
      <hr />
      <ThirdForm></ThirdForm>
      <hr />
      <Category></Category>
      <hr /> */}
      <Users></Users>
      
    </>
  );
}

export default App;
