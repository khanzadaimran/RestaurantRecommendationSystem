import React, { Component } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { Container, Content,  Icon,Footer,FooterTab,
  Form, Item, Input, Label, Right, Left, Card,CardItem,Body,Button, Header,Title,Badge} from 'native-base';
  
  import { Ionicons, FontAwesome } from "@expo/vector-icons";
  import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import categoriesData from '../assets/data/categoriesData';
  import popularData from '../assets/data/popularData';
  import colors from '../assets/colors/colors';
  import { color, round } from 'react-native-reanimated';
  import {Feather} from '@expo/vector-icons'
  import {MaterialCommunityIcons} from '@expo/vector-icons'
  import DateTimePickerModal from "react-native-modal-datetime-picker";
 // import QuantitySelector from 'react-native-quantity-selector';
 // import QuantitySelector from 'react-quantity-picker';
//import Quantity from 'react-quantity-te
import Dialog from 'react-native-dialog';  

export default class Booking_Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      isDatePickerVisible:false,
      setDatePickerVisibility:false,
      statusdialog:false
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  
  showDatePicker = () => {
  this.setState({isDatePickerVisible:true})
  
};
   hideDatePicker = () => {
this.setState({setDatePickerVisibility:false})

  };

 handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  opendialog(){

    this.setState({statusdialog:!this.state.statusdialog})
  }   
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    
    return (
     

        <Container>
        <Header style={{backgroundColor:'white'}} >
          <Left>
            <Button  style={{backgroundColor:'white'}}>
              <Icon name='arrow-back' style={{color:'black'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{fontWeight:'bold',fontSize:20,color:'black',marginLeft:2}} >Booking Details</Title>
          </Body>
           <Right>
          </Right>
        </Header>
<Content>

<View>
    <Dialog.Container visible={this.state.statusdialog}>

      <Dialog.Description style={{fontWeight:'bold'}}>
    Thanks! For Booking In Our Resturant.
      </Dialog.Description>
      <Dialog.Button label="OK" onPress={()=>this.opendialog()}/>
   
    </Dialog.Container>
  </View>        
           <Text style={styles.infoRecipeName}>Your Booking Details </Text>


        <Card style={{flex: 0 ,marginTop:40}}  >
            <CardItem bordered >
              <Left>
                <Body>
                  <Text style={{fontWeight:'bold',fontSize:20,marginLeft:80 }} >PIZZA HUT</Text>
                </Body>
              </Left>
              <Right>
              </Right>
            </CardItem>
            
            
            <CardItem>
            <Left>
                 <Text>Day</Text>
              </Left>
              <Right>
                <Text>Monday</Text>
              </Right>
          </CardItem>
  
            <CardItem>
              <Left>
                  <Text>Time</Text>
              </Left>
              <Right>
             <Text>10 :00 A.M</Text>
              </Right>
            </CardItem>

            <CardItem bordered>
              <Left>
                  <Text>No of Persons</Text>
              </Left>
              <Right>
            <Text>5</Text>
              </Right>
            </CardItem>


            <CardItem bordered>
              <Left>
                  <Text>Special Instruction</Text>
              </Left>
              <Right>
            <Text>Birthday Party Arragnment</Text>
              </Right>
            </CardItem>



          </Card>
  
</Content>


<Footer>
          <FooterTab  >
            <Button style={{backgroundColor:"red"}} onPress ={()=>this.opendialog()} >
           <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>
             CONFIRM BOOKING</Text>
            </Button>
          </FooterTab>
        </Footer>

         

</Container>


 );
 } 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  popularWrapper: {
  //  paddingHorizontal: 10,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});


