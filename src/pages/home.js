import React, { Component } from 'react'

//Components
import Intro from '../components/intro';
import CenteredContent from '../components/centeredContent';
import FeaturedContent from '../components/featuredContent';
import FeaturedImages from '../components/featuredImages';
import FeaturedArticles from '../components/featuredArticles';

//Images
import placeHolderImg from '../resources/placeholder.jpg';

class Home extends Component{
  render(){
    return (
      <div>
        <Intro
          subtitle='WebBase V.I'
          title='Create Dreams'
          content='expand your web-presence with your vision'
          img={placeHolderImg}
        />
        <CenteredContent 
          subtitle='WebBase V.I'
          title='Lorem ipsum' 
          content='
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Praesent vitae aliquet ligula. 
          Morbi at neque quis justo tempor consectetur id et ligula. 
          Praesent maximus, urna in suscipit dictum, 
          est mi placerat urna, ut interdum purus diam ut mauris. 
          Fusce accumsan interdum ante at efficitur. 
          Maecenas malesuada odio elementum ipsum condimentum, 
          a auctor orci efficitur. Nam pharetra ante erat, 
          porttitor scelerisque justo facilisis ut. 
          Phasellus fringilla risus id bibendum eleifend. 
          Nunc augue justo, pulvinar vel tincidunt vitae, 
          facilisis eget nibh. Suspendisse vulputate felis 
          sed dignissim laoreet. Fusce sit amet volutpat leo.'
        />
        <FeaturedContent 
          title='Lorem ipsum'
          subtitle='WebBase V.I'
          sectionBumpers={[false,true]}
          img={placeHolderImg}
          subImg={placeHolderImg}
          isLeft={true}
        />
        <FeaturedContent
          title='Lorem ipsum'
          subtitle='WebBase V.I'
          sectionBumpers={[true,false]}
          img={placeHolderImg}
          subImg={placeHolderImg}
          isLeft={false}
        />  
        <FeaturedImages
          imgs={[placeHolderImg]}
        />
        <FeaturedArticles
          title='Lorem ipsum'
          subtitle='WebBase V.I'
          articles={[
            {
              title:'Lorem ipsum',
              subtitle: 'WebBase V.I',
              href:'/home',
              img:placeHolderImg
            },
            {
              title:'Lorem ipsum',
              subtitle: 'WebBase V.I',
              href:'/home',
              img:placeHolderImg
            }
          ]}
        />
      </div>
    );
  }
}

export default Home;