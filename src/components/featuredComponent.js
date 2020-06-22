import React from 'react';
import PageSection from './pageSection';
import style from '../styles';
import styled from 'styled-components';
import {rgba} from 'polished';
import ContentGroup from './contentGroup';

const SFeaturedComponent=styled.article`
  width:fit-content;
  ${style.mixins.flex({align: 'center',justify: 'center',direction: 'column'})}
`;

const SComponentContainer=styled.article`
  border-radius:1rem;
  padding:1rem;
  ${style.mixins.flexItem({align: 'stretch'})}
  background-color:${rgba(style.constants.colors.black,0.3)};
`;

const FeaturedComponent=(props) => {
  return (
    <PageSection justify='start' bgImg={props.bgImg}>

      <SFeaturedComponent>
        <ContentGroup
          subtitle={props.subtitle}
          title={props.title}
          content={props.content}
          alignment={props.alignment}
        />
        <SComponentContainer>
          {props.children}
        </SComponentContainer>
      </SFeaturedComponent>
    </PageSection>
  );
};

export default FeaturedComponent;
