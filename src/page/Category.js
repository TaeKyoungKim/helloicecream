/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, View, Left, Right, Button, Icon, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Ionicons} from '@expo/vector-icons';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import Product from '../component/Product';


export default class Category extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: []
      };
  }

  componentWillMount() {
    var products = [
      { id: 1, title: '요거트맛', categoryId: 5, categoryTitle: '헬로아이스크림', price: '내사진만 보이네', image: 'http://drive.google.com/uc?export=view&id=1W8Xsx_LFN3VzMjegHKmNoBFPbBIFgRST', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 2, title: '피넛버터맛', categoryId: 2, categoryTitle: '헬로아이스크림', price: '머가~이렇게 맛있지?', image: 'http://drive.google.com/uc?export=view&id=1uTZhuIR2m22Dg_bn4RpPHj5jhBXHczqe', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 10, title: '바나나맛', categoryId: 1, categoryTitle: '헬로아이스크림', price: '아들 아이스크림 먹방 ㅎㅎ', image: 'http://drive.google.com/uc?export=view&id=19XvSMt5cehu-v8qsEyfWVXQILeaH9sin', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 15, title: '카라멜맛', categoryId: 5, categoryTitle: '헬로아이스크림', price: '살 안찌는 맛남', image: 'http://drive.google.com/uc?export=view&id=1Ona0o8K4mMbB9WbmFGvO2Z_unL7QNjRf', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 11, title: '다크초코맛', categoryId: 5, categoryTitle: '저칼로아이스크림', price: '이거 남자한테~ 딱', image: 'http://drive.google.com/uc?export=view&id=1OoKJvwiKeu9_YZdSfIGz_z0mp6SmMBIT', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 22, title: '녹차맛', categoryId: 2, categoryTitle: '저칼로리아이스크림', price: '1500원에 행복', image: 'http://mblogthumb3.phinf.naver.net/20160614_170/kitty6865_1465889090602CYi8k_JPEG/1465819967108.jpg?type=w2', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 100, title: '리코타치즈맛', categoryId: 1, categoryTitle: '저칼로리아이스크림', price: '이거 진짜다이어트', image: 'http://drive.google.com/uc?export=view&id=1HkduFT33GRi-6WAzlrn7rqgD79dC3wlq', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 215, title: '바닐라맛', categoryId: 5, categoryTitle: '저칼로리아이스크림', price: '2000원', image: 'http://mblogthumb3.phinf.naver.net/MjAxODA1MzBfMjY4/MDAxNTI3NjcyNTA0OTk1.flPhZlVcIBmdYhrhn41MZ34YluIp3zlvcy5DmpPjpQwg.xxY-cMdh3mZ9CqvNZhAi5WI6p7Uq6GDUcJUi-izwswQg.JPEG.clicksoojung/20180530_182754.jpg?type=w800', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 12, title: '일반 아이스크림', categoryId: 5, categoryTitle: '일반아이스크림', price: '2200원', image: 'http://www.babytimes.co.kr/news/photo/201807/21053_38647_1337.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 29, title: '딸기맛', categoryId: 2, categoryTitle: '일반아이스크림', price: '2300원', image: 'http://mblogthumb4.phinf.naver.net/MjAxODA2MDRfMjMy/MDAxNTI4MDkyODU2Mjk1.sOZ65pbF-ga-xouApjoLGB9ZdLwzbwu0QOZydLopG-Yg.yX-OVc6jXTVrLSGVNdBgaU7MKCAh9KGp93VGAkfLT7cg.JPEG.clicksoojung/20180604_151313.jpg?type=w800', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 16, title: '이데로쭈욱', categoryId: 1, categoryTitle: '헬로림이스크림', price: '좀 시크한가요?', image: 'http://drive.google.com/uc?export=view&id=1n8JJDe3IVfV46KdWZYCEqxe9AzZI1qem', description: "Hello there, i'm a cool product with a heart of gold."},
      { id: 17, title: '다이어트', categoryId: 1, categoryTitle: '헬로림이스크림', price: '정말 맛도있네요', image: 'http://drive.google.com/uc?export=view&id=1Z0apdmbUEY6KaNY5MKeHMVV0UB2xHBpm', description: "Hello there, i'm a cool product with a heart of gold." },
      { id: 23, title: '맛스크림', categoryId: 1, categoryTitle: '헬로림이스크림', price: '내 최 애템', image: 'http://drive.google.com/uc?export=view&id=1YJ51gEcBvtvptlnwgIT8S0VU61d5ox-W', description: "Hello there, i'm a cool product with a heart of gold." },
      { id: 26, title: '이맛이야!', categoryId: 1, categoryTitle: '헬로림이스크림', price: '저칼로리 딱이야', image: 'http://drive.google.com/uc?export=view&id=1sNRCEf-kU_N6A6mOUyS2hrHZOHgT0qwM', description: "Hello there, i'm a cool product with a heart of gold." },
    ];
    this.setState({items: products});
  }

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          < Ionicons Ionicons size={30} name = 'ios-menu'/>
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          < Ionicons Ionicons size={30} name = 'ios-search' / >
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );

    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container style={{backgroundColor: '#fdfdfd'}}>
            <Navbar left={left} right={right} title={this.props.title} />
            <Content padder>
              {this.renderProducts()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderProducts() {
    let items = [];
    let stateItems = this.state.items
    for(var i=0; i<stateItems.length; i+=2 ) {
      if(stateItems[i+1]) {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Product key={stateItems[i+1].id} product={stateItems[i+1]} isRight />
          </Grid>
        );
      }
      else {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Col key={i+1} />
          </Grid>
        );
      }
    }
    return items;
  }
}
