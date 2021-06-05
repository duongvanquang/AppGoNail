import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../constants';

const {width, height} = Dimensions.get('screen');

const LoginUser = ({navigation}) => {
  const [username, setUserName] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [realName, setRealName] = React.useState(false);
  const [address,setAddress ]= React.useState(false)
  return (
    <ImageBackground
      source={{
        uri: 'https://khostock.net/wp-content/uploads/2019/05/background-bien-tuyet-dep-cho-ghep-anh-23.jpg',
      }}
      resizeMode="cover"
      style={{width: width, height: height}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{marginTop: SIZES.padding * 10}}>
          <Text style={{color: COLORS.white, ...FONTS.h1}}>USER</Text>
        </View>
        <View style={{width: 300, height: 500}}>
          <Text style={{color: COLORS.lightGreen, ...FONTS.body3}}>
            Full Name
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
            }}
            placeholder="Enter Name"
            placeholderTextColor={COLORS.red}
            selectionColor={COLORS.white}
            onChangeText={setUserName}
          />
          <Text style={{color: COLORS.lightGreen, ...FONTS.body3}}>
            Password
          </Text>
          <View>
            <TextInput
              style={{
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
              }}
              placeholder="Enter Password"
              placeholderTextColor={COLORS.red}
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
          <Text style={{color: COLORS.lightGreen, ...FONTS.body3}}>Email</Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
            }}
            placeholder="Enter Email"
            placeholderTextColor={COLORS.red}
            selectionColor={COLORS.white}
            onChangeText={setEmail}
          />
          <Text style={{color: COLORS.white, ...FONTS.body3}}>Real Name</Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
            }}
            placeholder="Enter Real Name"
            placeholderTextColor={COLORS.red}
            selectionColor={COLORS.white}
            onChangeText={setRealName}
          />
          <Text style  ={{color:COLORS.white,...FONTS.body3}}>Address</Text>
          <TextInput
          style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.white,
          }}
          placeholder="Enter Address"
          placeholderTextColor={COLORS.red}
          selectionColor={COLORS.white}
          onChangeText={setAddress}
          />
        </View>
        <View style={{margin: SIZES.padding}}>
        <TouchableOpacity
            style={{
              height: 60,width:200,
              backgroundColor: COLORS.purple,
              borderRadius: SIZES.radius / 1.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress ={() =>{
               navigation.navigate('MenuUser') 
            }}
            >
                 <Text style={{color: COLORS.white, fontSize: 20}}>SignUp</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default LoginUser;
