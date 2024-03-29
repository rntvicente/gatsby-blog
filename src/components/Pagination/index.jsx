import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

import * as Styled from './styled';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
    <Styled.PaginationWrapper>
      {!isFirst && (
        <Link to={prevPage}>
          ← página anterior
        </Link>
      )}

      <p>
        {currentPage} de {numPages}
      </p>

      {!isLast && (
        <Link to={nextPage}>
          proxima página →
        </Link>
      )}
    </Styled.PaginationWrapper>
  );

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
