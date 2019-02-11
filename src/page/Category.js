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
      {id: 1, title: '요거트맛', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://blogfiles.naver.net/MjAxODA0MjBfMjUg/MDAxNTI0MjI4ODc1Nzk0.bDZlypfe5IXiHjRze5gPo3OPfyU5dVvKA68Nm4qCbmUg.AjoEzDJA6A-hrJF7gTptEcWUqEJSlIgf_im0xkOfZGMg.JPEG.honeyt02/%C7%EF%B7%CE%BE%C6%C0%CC%BD%BA%C5%A9%B8%B200.JPG', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 2, title: '피넛버터맛', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://blogfiles.naver.net/MjAxODA2MDNfNzUg/MDAxNTI4MDA4NzI5MDU0.9SVzrToy1HDGbca55DHDBpK91ZIHMJvYLXFZ5VZdwWgg.08W2ebt5LtVCst3xMbEmo4fuJi5Erb2xt8oSo3f-LKIg.JPEG.kkadaeki83/1528008718439.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 10, title: '바나나맛', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://blogfiles.naver.net/MjAxODAyMDJfNDUg/MDAxNTE3NTM5OTk5NjY5.QmkJGgDd7AICt303vbDSBaTMhj3-TAzFrF0RqA0Zw20g.yJnJ-4O3fiqF1yBMeUHnBq05itASB7E5z3HhjmYlLFsg.JPEG.rubijina/%C7%EF%B7%CE%BE%C6%C0%CC%BD%BA%C5%A9%B8%B24.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 15, title: '카라멜맛', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_100,y_50/v1500465308/pexels-photo-500034_uvxwcq.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 11, title: '다크초코맛', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 22, title: '녹차맛', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 100, title: '리코타치즈맛', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_center,h_250/v1500465307/pexels-photo-262226_kbjbl3.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 215, title: '바닐라맛', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 12, title: '일반 아이스크림', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250/v1500465307/pexels-photo-488541_s0si3h.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 29, title: '딸기맛', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 16, title: '퓨전 맛', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    ];
    this.setState({items: products});
  }

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          < Ionicons name = 'ios-menu'/>
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          < Ionicons name = 'ios-search' / >
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
