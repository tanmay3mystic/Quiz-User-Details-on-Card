import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://json-faker.onrender.com/users")
      .then((response) => response.json())
      .then((data) => setData(data.users));
  };

  return (
    <div className="App g-2 ">
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <h5
              style={{ display: "contents" }}
              className="displayContent color-light blockquote "
            >
              Your User Details
            </h5>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search by user name"
                aria-label="Search"
              />
              <button class="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="p-2" />
      <div
        style={{
          flexGrow: 1,
        }}
        className="container"
      >
        <div class="container">
          <div class="row-cols-6 ">
            {data?.map((_res) => (
              <div className="col-12 .col-md-6 .col-lg-4">
                <div className="card">
                  <img
                    src={_res?.image}
                    className="card-img-top"
                    alt={_res?.id}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{_res.name}</h5>
                    <p className="card-text">{_res.about}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
