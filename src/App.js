import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import { Container, Header, Checkbox } from "semantic-ui-react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [regular, setRegular] = useState(false);
  const [small, setSmall] = useState(false);

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
    showPackages();
  }, [regular, small]);

  useEffect(() => {
    fetchAPI().then(data => setData(data));
  }, []);

  const showPackages = () => {
    const chosenPackages = [];
    data.forEach(item => {
      if (regular === true) {
        if (item.tampons[0].size === "regular") {
          chosenPackages.push(item);
        }
      } else if (small === true) {
        if (item.tampons[0].size === "small") {
          chosenPackages.push(item);
        }
      } else {
        if (small === true && regular === true) {
          chosenPackages.push(item);
        }
      }
    });
    return chosenPackages;
  };

  return (
    <Container>
      <Header as="h1">Products</Header>
      <Checkbox slider label="Regular" onChange={handleRegular} />

      <Checkbox toggle label="Small" onChange={handleSmall} />

      <Product data={showPackages()} />
    </Container>
  );
};

export default App;
