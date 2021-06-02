import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');
const Detail = ({route, navigation}) => {
  const item = route.params;
  const {menu} = item;
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Image
          source={item.img}
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
              backgroundColor: COLORS.yellow,
            },
            styles.shadow,
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.shadow}>
              <Image
                source={item.img}
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
              <Text style={{color: COLORS.primary, ...FONTS.body3}}>
                {item.name}
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Image
                  source={icons.location}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <Text style={{...FONTS.body3, textAlign: 'center'}}>
                  {item.location}
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: SIZES.radius}}>
            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
              {menu.map(item => {
                return <Text>{item.type}</Text>;
              })}
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
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  console.log('Menu on pressed');
                }}>
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
      </View>
      <View style={{flex: 1.5}}>
        <View
          style={{marginTop: SIZES.padding, paddingHorizontal: SIZES.padding}}>
          <Text style={{color: COLORS.purple, ...FONTS.h2}}>
            Menu Nail Infor
          </Text>
          <ScrollView horizontal>
            {menu.map(item => {
              return (
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: SIZES.padding,
                    }}>
                    <TouchableOpacity  onPress  ={() =>{
                        navigation.navigate('Payment', {item:item})
                    }}>
                       
                    <Image
                      source={item.photo}
                      style={{
                        width: width / 2,
                        height: height / 4,
                        borderRadius:SIZES.radius
                      }}
                    />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
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
export default Detail;
