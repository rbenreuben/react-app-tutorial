import React from "react";

const Navigation = () => {
  return (
    <div>
      <ul class="nav d-flex align-items-center bg-dark">
        <li class="nav-item">
          <a class="nav-link active" href="/">
            <img style={{ width: "50px", height: "50px" }} src="logo192.png" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="/cards">
            Cards
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="/other">
            Other
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
