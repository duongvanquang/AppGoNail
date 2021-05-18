import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');
const Profile = ({route, navigation}) => {
  const item = route.params;
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '80%',
          }}
        />
        <View
          style={[
            {
              position: 'absolute',
              bottom: '5%',
              left: '5%',
              right: '5%',
              borderRadius: 15,
              padding: SIZES.padding,
              backgroundColor: COLORS.white,
            },
            styles.shadow,
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.shadow}>
              <Image
                source={item.image}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 15,
                }}
              />
            </View>
            <View
              style={{
                marginHorizontal: SIZES.radius,
                justifyContent: 'space-around',
              }}>
              <Text style={{...FONTS.h3}}>{item.name}</Text>
              <Text style={{...FONTS.body3}}>{item.YearofBirth}</Text>
            </View>
          </View>
          <View style={{marginTop: SIZES.radius}}>
            <Text style={{color: COLORS.gray, ...FONTS.body3}}>{item.description}
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 50,
              left: 20,
              right: 20,
              //height: 50,
              flexDirection: 'row',
            }}>
            <View style={{flex: 1, marginTop: SIZES.padding * 3}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')} >
                <Image
                  source={icons.back}
                  resizeMode="cover"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
                onPress={() => {
                  console.log("Menu on pressed")
                }}
              >
                <Image
                  source={icons.menu}
                  resizeMode="cover"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1.5 }}>
        <View style={{
          flexDirection: 'row', marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding * 2, justifyContent: 'space-between'
        }}>  
        </View>
        <ScrollView style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
          <Text style={{ ...FONTS.h2 }}>About</Text>
            <Image 
            source={item.service.img}
            resizeMode='contain'
            style={{ width:30, height:30}}
            />
        </ScrollView>
      </View>
      <ScrollView style={{ flex: 0.5, paddingHorizontal: SIZES.padding }}>
        <LinearGradient
          style={[{ height: 70, width: '100%', borderRadius: 15 }]}
          colors={['#edf0fc', '#d6dfff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
              <Text style={{ ...FONTS.h1 }}>{item.price}</Text>
            </View>

            <TouchableOpacity
              style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }}
              onPress={() => {
                navigation.navigate('Payment')
                alert('Chúc Mừng bạn đã Booking Thành Công')
              }}
            >
              <LinearGradient
                style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }]}
                colors={['#46aeff', '#5884ff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>BOOKING</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
   
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default Profile;
