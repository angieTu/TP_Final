import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";
import { ImageProvider } from "./contexts/ImageContext";
import { DataProvider } from "./contexts/DataContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MovieProvider } from "./contexts/MovieContext";
import { TvShowProvider } from "./contexts/TvShowContext";
import { PaginationProvider } from "./contexts/PaginationContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import { UserProvider } from "./contexts/UserContext";
import { FavsProvider } from "./contexts/FavsContext";
import { SearchProvider } from "./contexts/SearchContext";

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <PaginationProvider>
        <SearchProvider>
          <UserProvider>
            <FavsProvider>
              <MovieProvider>
                <TvShowProvider>
                  <DataProvider>
                    <ImageProvider>
                      <ThemeProvider>
                        <App />
                      </ThemeProvider>
                    </ImageProvider>
                  </DataProvider>
                </TvShowProvider>
              </MovieProvider>
            </FavsProvider>
          </UserProvider>
        </SearchProvider>
      </PaginationProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
