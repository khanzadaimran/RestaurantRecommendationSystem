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
//import Quantity from 'react-quantity-textinput';

  

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      isDatePickerVisible:false,
//      setDatePickerVisibility:false
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

  
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    
    return (


      <Container>
        <Header   style={{color:'red'}} >
          <Left>
            <Button>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
       

       <View style={styles.popularWrapper}>
          {popularData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('Details', {
                  item: item,
                })
              }>
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={styles.popularTopText}>top of the week</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        rfdvgvfdvf
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Weight
                        </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.textDark} />
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.textDark}
                      />
                      <Text style={styles.rating}>rfvdc</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.popularCardRight}>
                  <Image source={item.image} style={styles.popularCardImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}

    
</View>
 </Body>
 <Right />
</Header>
<Content>

<Text style={styles.infoRecipeName}>Customize Your Order</Text>

<Card>
            <CardItem>
              <Body>
          
      <Button onPress={()=>this.showDatePicker()} style={{backgroundColor:'#bfbfbf',marginLeft:20}} ><Text style={{color:'black',padding:120,borderRadius:10}} >Show Date</Text></Button>
      <DateTimePickerModal
      isVisible={this.state.isDatePickerVisible}
        mode="date"
        onConfirm={false}
        onCancel={false}
      />

<Button onPress={()=>this.showDatePicker()} style={{backgroundColor:'#bfbfbf',marginTop:10,padding:120,marginLeft:20}} ><Text style={{color:'black'}} >Show Time</Text></Button>
      <DateTimePickerModal
      isVisible={this.state.isDatePickerVisible}
        mode="time"
        onConfirm={false}
        onCancel={false}
      />

<Item floatingLabel>
              <Label>No Of Persons (e.g 1,2,4)</Label>
              <Input/>
            </Item>


<Item floatingLabel>
              <Label>Special Instructions (Optional)</Label>
              <Input/>
            </Item>

              </Body>
            </CardItem>
          </Card>

</Content>
<Footer>
          <FooterTab  >
            <Button style={{backgroundColor:"red"}} onPress ={()=>this.props.navigation.navigate('View Cart')} >
           <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>
             BOOK NOW</Text>
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


