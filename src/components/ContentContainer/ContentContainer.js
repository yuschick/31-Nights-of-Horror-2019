import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../../theme';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const ContentContainer = ({ children }) => <Container>{children}</Container>;

const Container = styled.section`
  margin: 0 auto;
  max-width: ${theme.size.content.maxWidth};
  position: relative;
  width: 100%;
`;

ContentContainer.propTypes = propTypes;

export default ContentContainer;
