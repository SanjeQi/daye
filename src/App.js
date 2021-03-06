import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import { Container, Header, Checkbox } from "semantic-ui-react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [regular, setRegular] = useState(true);
  const [small, setSmall] = useState(true);
  const [packages, setPackages] = useState([]);

  const API = "https://front-end-test-bvhzjr6b6a-uc.a.run.app";

  const fetchAPI = async () => {
    const resp = await fetch(API);
    return await resp.json();
  };

  const handleRegular = () => {
    if (regular === false) {
      return setRegular(true);
    }
    setRegular(false);
  };

  const handleSmall = () => {
    if (small === false) {
      return setSmall(true);
    }
    setSmall(false);
  };

  useEffect(() => {
    fetchAPI().then(data => setData(data));
  }, []);

  useEffect(() => {
    const chosenPackages = [];
    data.forEach(item => {
      if (small === false && regular === true) {
        if (item.tampons[0].size === "regular") {
          chosenPackages.push(item);
        }
      } else if (small === true && regular === false) {
        if (item.tampons[0].size === "small") {
          chosenPackages.push(item);
        }
      } else if (small === true && regular === true) {
        chosenPackages.push(item);
      } else {
        return null;
      }
    });
    return setPackages(chosenPackages);
  }, [regular, small, data]);

  return (
    <Container>
      <Header as="h1">Daye Tampons Package Offers</Header>
      <Checkbox label="Regular" checked={regular} onChange={handleRegular} />
      <Checkbox label="Small" checked={small} onChange={handleSmall} />
      <Product data={packages} />
    </Container>
  );
};

export default App;
