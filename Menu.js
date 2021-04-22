import React, { Component } from "react";
import { Container, Header, Left, Body, Button, Icon, Title, Segment, Content, Text,List, ListItem,Radio,
left,Right } from 'native-base';

import {Keyboard, View, TextInput, TouchableWithoutFeedback,TouchableOpacity , Alert,Image, KeyboardAvoidingView,StyleSheet,} from 'react-native';





export default class Menu extends Component{
  
  constructor(props) {
    super(props)
    this.state = {
  }
  }

  

  
    render() {
     return (

        <Container>
        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Segments</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
       

        <Content>
        <List>
            <ListItem itemDivider>
              <Text>Pizza  </Text>
            </ListItem>   

            <ListItem>
                <Left>
              <Text>Aaron Bennet</Text>
              </Left>
              <Right>
              <Radio selected={true} />
            </Right>
            </ListItem>

          
            <ListItem>
                <Left>
              <Text>Aaron Bennet</Text>
              </Left>
              <Right>
              <Radio selected={true} />
            </Right>
            </ListItem>

            <ListItem itemDivider>
              <Text>Burger </Text>
            </ListItem>   

            <ListItem>
                <Left>
              <Text>Aaron Bennet</Text>
              </Left>
              <Right>
              <Radio selected={true} />
            </Right>
            </ListItem>

            <ListItem>
                <Left>
              <Text>Aaron Bennet</Text>
              </Left>
              <Right>
              <Radio selected={true} />
            </Right>
            </ListItem>



          </List>
        </Content>
      </Container>



     );
 }

    }
      
    const styles = StyleSheet.create({


     });
    
    