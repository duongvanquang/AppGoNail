import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, images, SIZES, FONTS, icons} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetLocation from 'react-native-get-location';
import {useEffect} from 'react';

const isLogin = 'IS_LOGIN';
const {width, height} = Dimensions.get('screen')
const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUserName] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setLocation(location);
        console.log(location)
      })
      .catch(error => {});
  }, []);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const value = await AsyncStorage.getItem(isLogin);
      if (value !== null && !!value) {
        navigation.navigate('Home');
      }
    } catch (e) {
      //error reading value
    }
  }
  async function storeData() {
    try {
      await AsyncStorage.setItem(isLogin, 'value');
    } catch (e) {
      // saving error
    }
  }
  function renderLogo() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 10,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.Logo}
          resizeMode="contain"
          style={{
            width: width / 1.7,
            
          }}
        />
      </View>
    );
  }
  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 4,
          marginHorizontal: SIZES.padding * 3,
        }}>
        <View style={{marginTop: SIZES.padding * 3}}>
          <Text style={{color: COLORS.lightGreen, ...FONTS.body3}}>
            Full Name
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding * 3,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
            }}
            placeholder="Enter Name"
            placeholderTextColor={COLORS.purple}
            selectionColor={COLORS.white}
            onChangeText={setUserName}
          />
        </View>
        <View style={{marginTop: SIZES.padding * 2}}>
          <Text style={{color: COLORS.lightGreen, ...FONTS.body3}}>
            Password
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
            }}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.purple}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 10,
              right: 0,
              height: 30,
              width: 30,
            }}
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderButtom() {
    return (
      <View
        style={{
          margin: SIZES.padding * 3,
        }}>
        <View style={{margin: SIZES.padding}}>
          <TouchableOpacity
            style={{
              height: 60,
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.radius / 1.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              if (!username || !password) {
                alert('Vui L??ng Nh???p T??i Kho???n M???t Kh???u');
                return;
              }
              const body = {
                username: username,
                password: password,
                location,
              };
              axios({
                method: 'post',
                url: 'https://appdatphong.herokuapp.com/Login',
                data: body,
              })
                .then(function ({data}) {
                  if (data?.data?.length !== 0) {
                    console.log({data});
                    alert('Ch???c M???ng b???n ???? ????ng nh???p th??nh c??ng');
                    storeData();
                    navigation.navigate('Home');
                  } else {
                    alert('T??i kho???n m???t kh???u kh??ng ????ng');
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}>
            <Text style={{color: COLORS.white, fontSize: 20}}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: SIZES.padding}}>
          <TouchableOpacity
            style={{
              height: 60,
              backgroundColor: COLORS.secondary,
              borderRadius: SIZES.radius / 1.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              const body = {
                username: username,
                password: password,
              };
              axios({
                method: 'post',
                url: 'https://appdatphong.herokuapp.com/signup',
                data: body,
                location,
              })
                .then(function ({data}) {
                  console.log({data});
                  alert('Ch??c M???ng b???n ???? t???o t??i kho???n th??nh c??ng');
                  navigation.navigate('Home');
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}>
            <Text style={{color: COLORS.white, fontSize: 20}}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <LinearGradient
        colors={[COLORS.yellow, COLORS.red]}
        style={{
          flex: 1,
        }}>
        <ScrollView>
          {renderLogo()}
          {renderForm()}
          {renderButtom()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};
export default Login;
