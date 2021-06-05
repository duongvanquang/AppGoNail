import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES} from '../constants';

const UserOrClient = ({navigation}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            margin: SIZES.padding,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{marginBottom: SIZES.base}}>
            <Text style={{color: COLORS.lime, ...FONTS.body4}}>
              Nếu bạn là người làm Nail thì 'Click User'
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 60,
              width: 200,
              backgroundColor: COLORS.yellow,
              borderRadius: SIZES.radius / 1.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('LoginUser')
            }}>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.body2,
              }}>
              USER
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: SIZES.padding * 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style  ={{ marginBottom:SIZES.base}}>
          <Text style  ={{ color:COLORS.lime,...FONTS.body}}>Nếu bạn là khách hàng làm Nail thì 'Click CLIENT'</Text>
          </View>
          <TouchableOpacity
            style={{
              height: 60,
              width: 200,
              backgroundColor: COLORS.red,
              borderRadius: SIZES.radius / 1.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={{color: COLORS.black, ...FONTS.body2}}>CLIENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default UserOrClient;
