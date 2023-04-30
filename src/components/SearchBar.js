import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import unsplash from "../config.js";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const searchPhotos = async (e) => {
    e.preventDefault();
    console.log("Submitting the form");

    unsplash.search
      .getPhotos({
        query: query,
        page: 1,
        perPage: 15,
      })
      .then((response) => {
        props.onResponseReturn(response.response.results);
      });
  };

  return (
    <>
      <Form className="form" onSubmit={searchPhotos}>
        <InputGroup>
          <InputGroup.Prepend>
            <Button className="btn-search" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 2 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </InputGroup.Prepend>
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Search photos here.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>
      </Form>
      <hr></hr>
    </>
  );
}

export default SearchBar;
