/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Ionicons} from '@expo/vector-icons';
// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import CategoryBlock from '../component/CategoryBlock';


export default class Home extends Component {
  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          < Ionicons name = 'ios-menu' / >
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          < Ionicons name = 'ios-search' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="MY STORE" />
            <Content>
              {this.renderCategories()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderCategories() {
    let cat = [];
    for(var i=0; i<categories.length; i++) {
      cat.push(
        <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} />
      );
    }
    return cat;
  }

}

var categories = [ 
  {
    id: 1,
    title: '헬로 아이스크림',
    image: 'http://blogfiles.naver.net/MjAxODA0MjlfMTEx/MDAxNTI1MDEyMTcxNjgy.5q1_4ncSJyzbYIm_KqlA8qDJS-E4-d1L9Oog4WUbt1Ig.5LQUpoKCsW7sd2Za76R5vp7hNeYK5eWX8EpeDkFVgNwg.JPEG.sk31505/%C7%EF%B7%CE%BE%C6%C0%CC%BD%BA%C5%A9%B8%B2.jpg'
  },
  {
    id: 2,
    title: '저칼로리 아이스크림',
    image: 'http://blogfiles.naver.net/MjAxODEwMjRfODIg/MDAxNTQwMzIyNzczNzg1.GkNVvjAaF7iw8rbn4KCu2_s29j2J4qgWRPkJ_fgTaNAg.eOoGCShi-SPOmrO8l5M4pYC17sih34fzk5RAt4zlv8gg.JPEG.always0513/%C0%FA%C4%AE%B7%CE%B8%AE%BE%C6%C0%CC%BD%BA%C5%A9%B8%B2005-5%C0%FA%C4%AE%B7%CE%B8%AE%BE%C6%C0%CC%BD%BA%C5%A9%B8%B2_%C7%EF%B7%CE%BE%C6%C0%CC%BD%BA%C5%A9%B8%B2.JPG'
  },
  {
    id: 3,
    title: '일반 아이스크림',
    image: 'http://blogfiles.naver.net/20140312_275/kd_bk_1394630042028n6o81_JPEG/%B7%CE%B0%ED%B9%DA%C0%BD-%BF%B9%BD%C3.jpg'
  },
  {
    id: 4,
    title: '영양만점 아이스크림',
    image: 'http://blogfiles.naver.net/MjAxODA1MDdfMjg2/MDAxNTI1Njg3OTM5OTU1.uy_uVreUHCM0KF4U15hDEBbKy0s9J4JKq1YW5JpRhkIg.A49sic-wflkwuJMlEy3FaSnWVadBiLFdc-HTyOk3FMMg.JPEG.hyehun15/095.JPG'
  }
];
