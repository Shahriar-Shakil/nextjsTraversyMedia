import {useState} from "react";
const Prices = ({bpi}) => {
  const [currency, setcurrency] = useState("USD");
  let list = "";
  if (currency === "USD") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {bpi.USD.description} :{" "}
        <span className="badge badge-primary">
          {bpi.USD.code} <strong>{bpi.USD.rate}</strong>
        </span>
      </li>
    );
  } else if (currency === "GBP") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {bpi.GBP.description} :{" "}
        <span className="badge badge-primary">
          {bpi.GBP.code} <strong>{bpi.GBP.rate}</strong>
        </span>
      </li>
    );
  } else if (currency === "EUR") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {bpi.EUR.description} :{" "}
        <span className="badge badge-primary">
          {bpi.EUR.code} <strong>{bpi.EUR.rate}</strong>
        </span>
      </li>
    );
  }
  return (
    <div>
      <ul className="list-group">{list}</ul>
      <br />
      <select
        onChange={(e) => setcurrency(e.target.value)}
        className="form-control"
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default Prices;
