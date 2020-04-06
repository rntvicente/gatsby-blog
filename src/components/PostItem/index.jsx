import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const PostItem = ({ slug, background, category, date, timeToRead, title, description }) => (
  <Styled.PostItemLink to={slug}>
    <Styled.PostItemWrapper>
      <Styled.PostItemTag background={background}>{category}</Styled.PostItemTag>
      <Styled.PostItemInfo>
        <Styled.PostItemDate>{date} - {timeToRead} </Styled.PostItemDate>
        <Styled.PostItemTitle>{title}</Styled.PostItemTitle>
        <Styled.PostItemDescription>{description}</Styled.PostItemDescription>
      </Styled.PostItemInfo>
    </Styled.PostItemWrapper>
  </Styled.PostItemLink>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default PostItem;
