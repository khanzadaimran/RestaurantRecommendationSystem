import React, { Component } from "react";
import { Container, Content,  Icon,Footer,FooterTab,
Form, Item, Input, Label, Right, Left, Card,CardItem,Body,Button, } from 'native-base';
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback,TouchableOpacity , Alert,Image, KeyboardAvoidingView,StyleSheet,} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
//import {} from '@'

    export default class Login extends Component{
  
  constructor(props) {
    super(props)
    this.state = {

        registerstatus:false,
        loginstatus:true,
        forgetpassword:false

    }
  }

  changeregstatus(){

    this.setState({loginstatus:false})

    this.setState({registerstatus:true})


  }

  changeloginstaus(){

    this.setState({loginstatus:true})
    
    this.setState({registerstatus:false})

  }


  
    render() {
     return (
<>
      
      <Container >
        
        <Content>

{this.state.loginstatus==true ? 
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <View style={styles.loginScreenContainer}>
    <View style={styles.loginFormView}>
      <Image style={{width:111, height:100,top:47,left:133,position:"absolute",borderRadius:360}} source={require('../Images/foods.png')} />
    <Text style={styles.logoText}>Shoughat</Text>
      <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
      <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
      <Left>
       <Text note style={{marginLeft:155}} >Forget Password ?</Text>
</Left>
<Button full  style={styles.loginButton} onPress={()=>this.props.navigation.navigate('Deal')} ><Text style={{color:'white',fontSize:25}} >Login</Text></Button>

         <Left>
          <Text style={styles.fbLoginButton} >OR</Text>    
            </Left>

            <View style={styles.alternativeLayoutButtonContainer} >
            
            <Entypo name="facebook-with-circle" size={44} color="#3b5998" style={{marginLeft:135}} />
            <Entypo name="google--with-circle" size={44} color="#990000" style={{marginRight:135}} />

        </View>
        <Text onPress={()=>this.changeregstatus()}  style={{textAlign:'center',justifyContent:'center',fontSize:18,marginTop:12,fontWeight:"bold"}}>Create an account ?</Text>   
 </View>

  </View>
</TouchableWithoutFeedback>
</KeyboardAvoidingView>

  :this.state.registerstatus==true ?  
  
  
  <KeyboardAvoidingView style={styles.containerView} behavior="padding">
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.loginScreenContainer}>
      <View style={styles.loginFormView}>

       <Image style={{width:111, height:100,top:47,left:133,position:"absolute",borderRadius:360}} source={require('../Images/foods.png')} />
    <Text style={styles.logoText}>Shoughat</Text>  
       <TextInput placeholder="First Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
        <TextInput placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
        <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
       <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
  
  <Button full  style={styles.loginButton} onPress={()=>this.changeloginstaus()} ><Text style={{color:'white',fontSize:25}}  >Sign up</Text></Button>
      </View>
      <Left>
          <Text style={styles.fbLoginButton} >OR</Text>    
            </Left>

            <View style={styles.alternativeLayoutButtonContainer} >
            
            <Entypo name="facebook-with-circle" size={44} color="#3b5998" style={{marginLeft:135}} />
            <Entypo name="google--with-circle" size={44} color="#990000" style={{marginRight:135}} />

        </View>

        <Text onPress={()=>this.changeregstatus()}  style={{textAlign:'center',justifyContent:'center',fontSize:18,marginTop:12,fontWeight:"bold"}}>LOG IN</Text>   

        
    </View>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  
  
  
  
  :false}

</Content>

      </Container>

</>
     );
 }

    }
      
    const styles = StyleSheet.create({

      containerView: {
        flex: 1,
        marginTop:30
      },
      loginScreenContainer: {
        flex: 1,
      },
      logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
      },
      loginFormView: {
        flex: 1
      },
      loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
      
      },
      loginButton: {
        backgroundColor: '#e60000',
        borderRadius: 15,
        height: 45,
        marginTop: 10,
        fontSize:20
       
      },
      fbLoginButton: {
        height: 45,
        marginTop: 10,
        fontSize:18,
      
      // backgroundColor: 'transparent',
       color:'black'
      },
      alternativeLayoutButtonContainer: {
       // margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10
      }

     });
