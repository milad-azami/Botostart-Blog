import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "./index.css";
import App from "./App";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cl5j9dq9h1dgd01uj5sq50rm2/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
