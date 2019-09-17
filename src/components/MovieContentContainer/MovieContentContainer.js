import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import theme from '../../theme';
import IMDBIcon from '../../assets/services/imdb.jpg';
import MovieRating from '../MovieRating/MovieRating';

const propTypes = {
  data: PropTypes.shape({}).isRequired,
};

const getRating = releases => {
  const us = releases.countries.find(c => c.iso_3166_1 === 'US');
  return us ? us.certification : 'Unrated';
};

const getLanguages = languages => {
  const names = languages.map(
    lang => lang.name.charAt(0).toUpperCase() + lang.name.slice(1)
  );
  return names.splice(0, 2).join(', ');
};

const trimOverview = overview => {
  const trimmed = overview.split(' ');
  let enhanced = trimmed.splice(0, 50).join(' ');

  if (trimmed.length > 50) {
    enhanced = `${enhanced}...`;
  }

  return enhanced;
};

const MovieContentContainer = ({ data }) => {
  console.log(data);

  return (
    <Container>
      <FlexContainer>
        <DateBlock>
          Oct&nbsp;
          {data.date < 10 ? `0${data.date}` : data.date}
        </DateBlock>
        <DayBlock>{data.day}</DayBlock>
      </FlexContainer>
      <MovieTitle>{data.title}</MovieTitle>
      <DetailsGrid>
        <MoviePoster data={data} />
        <OverviewGrid>
          <RatingsBar>
            <span>{format(parseISO(data.release_date), 'yyyy')}</span>
            <span>{getLanguages(data.spoken_languages)}</span>
            <span>{getRating(data.releases)}</span>
            <MovieRating score={data.vote_average} />
          </RatingsBar>
          <p>{trimOverview(data.overview)}</p>
          <ServicesContainer>
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IMDBIcon} alt="IMDB" />
            </a>
          </ServicesContainer>
        </OverviewGrid>
      </DetailsGrid>
    </Container>
  );
};

const Container = styled.article`
  align-self: end;
  margin-bottom: ${theme.space.xl};
`;

const FlexContainer = styled.div`
  display: flex;
`;

const DateBlock = styled.div`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  font: 1.15rem/1 ${theme.fonts.barlow};
  padding: ${theme.space.sm} ${theme.space.md};
  text-align: center;
  text-transform: uppercase;
  min-width: 75px;
  vertical-align: middle;
`;

const DayBlock = styled(DateBlock)`
  background: ${theme.colors.secondary};
  text-align: left;
  width: 275px;
`;

const MovieTitle = styled.h2`
  text-shadow: 1px 1px ${theme.colors.black};
  color: ${theme.colors.white};
  font: 700 2.15rem/1 ${theme.fonts.barlow};
  margin: ${theme.space.default} 0;
  text-transform: uppercase;
`;

const DetailsGrid = styled.section`
  display: grid;
  grid-gap: ${theme.space.default};
  grid-template-columns: 125px auto;
`;

const MoviePoster = styled.img.attrs(props => ({
  src: `https://image.tmdb.org/t/p/w1280/${props.data.poster_path}`,
  alt: props.data.title,
}))`
  max-width: 125px;
  width: 100%;
`;

const OverviewGrid = styled.section`
  display: grid;
  grid-gap: ${theme.space.md};
  grid-template-rows: 20px auto 35px;
`;

const RatingsBar = styled.section`
  align-items: center;
  display: grid;
  grid-gap: ${theme.space.lg};
  grid-template-columns: min-content max-content max-content auto;
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-gap: ${theme.space.md};
`;

MovieContentContainer.propTypes = propTypes;

export default MovieContentContainer;
