import React,{Component} from 'react';
import PageSection from '../components/pageSection';
import Intro from '../components/intro';
import Page from './page';
import {defaultNavbar,defaultFooter} from '../config/pages';
import Header from '../components/header';
import Footer from '../components/footer';

import rareImg from '../resources/something.gif';

export class Home extends Component {
  render() {
    return (
      <Page>
        <PageSection>
          <Header
            navbar={defaultNavbar}
          />
          <Intro
            subtitle='Portfolio Of'
            title='Dyontai'
            img={rareImg}
          >
          </Intro>
          <Footer {...defaultFooter}/>
        </PageSection>
      </Page>
    );
  }
}

export default Home;
