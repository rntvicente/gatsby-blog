import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const PostItem = ({ tag, date, title, description }) => (
  <Styled.PostItemLink to='/slug/'>
    <Styled.PostItemWrapper>
      <Styled.PostItemTag background='#47650b'>{tag}</Styled.PostItemTag>
      <Styled.PostItemInfo>
        <Styled.PostItemDate>{date}</Styled.PostItemDate>
        <Styled.PostItemTitle>{title}</Styled.PostItemTitle>
        <Styled.PostItemDescription>{description}</Styled.PostItemDescription>
      </Styled.PostItemInfo>
    </Styled.PostItemWrapper>
  </Styled.PostItemLink>
);

PostItem.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default PostItem;
