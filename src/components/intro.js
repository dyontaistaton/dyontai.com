import React from 'react';
import PageSection from './pageSection';
import ContentGroup from './contentGroup';

const Intro=(props) => {
  return (
    <PageSection bgImg={props.img} id='intro'>
      <ContentGroup
        subtitle={props.subtitle}
        title={props.title}
        content={props.content}
        fadeIn
      />
      {props.children}
    </PageSection>
  );
};

export default Intro;
