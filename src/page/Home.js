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
          < Ionicons size={30} name = 'ios-menu' / >
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          < Ionicons size={30} name = 'ios-search' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon  name='ios-cart' />
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
    image: 'http://drive.google.com/uc?export=view&id=1lQnVlmoa2jxGa0NkdVEkxzXIiAZ0NqJY'
  },
  {
    id: 2,
    title: '저칼로리 아이스크림',
    image: 'https://i.ytimg.com/vi/kayCzKUyL7A/maxresdefault.jpg'
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
