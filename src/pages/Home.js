import React, { useContext } from "react";

import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";

import Hero from "../components/Hero";
import Container from "../components/primitive/Container";
import CardListPreview from "../components/CardListPreview";
import ScrollToTop from "../components/ScrollToTop";

import DataContext from "../contexts/DataContext";
import MovieContext from "../contexts/MovieContext";
import TvShowContext from "../contexts/TvShowContext";
import ThemeContext from "../contexts/ThemeContext";

const overrideDark = css`
  & div {
    background-color: #3fbac2;
  }
`;

const overrideLight = css`
  & div {
    background-color: #992e2e;
  }
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { data, year, voteAverage, mediatype, isLoading } = useContext(
    DataContext
  );
  const { dataMovie, isLoadingMovie } = useContext(MovieContext);
  const { dataTvShow, isLoadingTvShow } = useContext(TvShowContext);
  return (
    <>
      {(isLoading || isLoadingMovie || isLoadingTvShow) && (
        <Container className={`onLoading-Container ${theme}`}>
          {theme === "dark" ? (
            <BounceLoader css={overrideDark} size="100px" />
          ) : (
            <BounceLoader css={overrideLight} size="100px" />
          )}
        </Container>
      )}
      {!isLoading && !isLoadingMovie && !isLoadingTvShow && data && (
        <Container className={`main-container ${theme}`}>
          <ScrollToTop />
          <Hero
            data={data}
            year={year}
            voteAverage={voteAverage}
            mediatype={mediatype}
          />
          <CardListPreview
            mediatype="movie"
            data={dataMovie}
            sectionTitle="Trending Movies"
            category="popular"
          />
          <CardListPreview
            mediatype="tv"
            data={dataTvShow}
            sectionTitle="Trending TV Shows"
            category="popular"
          />
        </Container>
      )}
    </>
  );
};

export default Home;
