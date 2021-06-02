import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {icons, images, SIZES} from '../constants';
import Swiper from 'react-native-swiper';
import {COLORS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');
const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Swiper>
        <View style={styles.slide}>
          <Image
            source={{
              uri: 'https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/01/13/nail-dep-3.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: 'https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/01/13/nail-dep-10.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: 'https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/01/13/nail-dep-8.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: 'https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/01/13/nail-dep-20.jpg',
            }}
            style={styles.image}
          />
        </View>
      </Swiper>
      <View
        style={{
          height: '50%',
          position: 'absolute',
          bottom: 0,
          paddingHorizontal: 40,
        }}>
        <Text
          style={{color: COLORS.lightyellow, fontSize: 35, fontWeight: 'bold'}}>
          Go Nail
        </Text>
        <TouchableOpacity
          style={[
            styles.shadow,
            {
              marginTop: SIZES.padding * 2,
              width: 120,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <LinearGradient
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}
            colors={['#46aeff', '#5884ff']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>Start!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
export default Onboarding;
