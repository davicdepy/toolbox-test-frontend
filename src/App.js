import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";

import formatTable from "./hook.js";
import serviceFetch from "./service.js";
import { ReduxCounter } from "./reduxCounter";
import { useDispatch } from "react-redux";
import { chargeResults } from "./reduxService";

function App() {
  const [allFiles, setAllFiles] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const loadTable = async () => {
    dispatch(chargeResults());
    setSearch("");
    const allData = await serviceFetch("http://localhost:10001/files/data");
    formatTable(allData, setAllFiles, dispatch);
  };

  const searchTable = async () => {
    dispatch(chargeResults());
    const allData = await serviceFetch(
      `http://localhost:10001/files/data/${search}`
    );
    formatTable([allData], setAllFiles, dispatch);
  };

  useEffect(() => {
    loadTable();
  }, []);

  return (
    <>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">React Test App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0"></Nav>
            <Container className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  e.target.value !== ""
                    ? setSearch(e.target.value)
                    : loadTable();
                }}
              />
              <Button onClick={() => searchTable()} variant="light">
                Search
              </Button>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="pt-3">
        <ReduxCounter />
        <Table striped bordered>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            {allFiles?.map((item, index) => (
              <tr key={index}>
                <td>{item.file}</td>
                <td>{item.text}</td>
                <td>{item.number}</td>
                <td>{item.hex}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default App;
