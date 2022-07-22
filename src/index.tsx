import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme/theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { FavoriteProvider } from "./utils/context/favoriteContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <FavoriteProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </FavoriteProvider>
  </ApolloProvider>
);

