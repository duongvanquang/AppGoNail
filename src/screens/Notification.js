import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  StyleSheet,
  Modal,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const {width, height} = Dimensions.get('screen');
const Notification = ({route, navigation}) => {
  const Thongbao = route?.params?.Thongbao || [];
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImageFilled =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    const CustomRatingBar = () => {
      return (
        <View style={styles.customRatingBarStyle}>
          {maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => setDefaultRating(item)}>
                <Image
                  style={styles.starImageStyle}
                  source={
                    item <= defaultRating
                      ? {uri: starImageFilled}
                      : {uri: starImageCorner}
                  }
                />
              </TouchableOpacity>
            );
          })}
        </View>
      );
    };
  function renderItem({item}) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: SIZES.padding * 2,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 300,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 20,
            shadowOffset: {
              width: 5,
              height: 10,
            },
            shadowColor: 'black',
            shadowOpacity: 0.5,
          }}>
          <Text
            style={{
              fontSize: 19,
              textAlign: 'center',
              color: 'blue',
              shadowOffset: {
                width: 5,
                height: 10,
              },
              shadowColor: 'black',
              shadowOpacity: 0.5,
            }}>
            Những phòng cần thanh toán
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            backgroundColor: 'white',
            height: 50,
            width: width,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 20,
            shadowOffset: {
              width: 5,
              height: 10,
            },
            shadowColor: 'black',
            shadowOpacity: 0.5,
          }}>
          <Text
            style={{
              fontSize: 19,
              textAlign: 'center',
              color: 'red',
              shadowOffset: {
                width: 5,
                height: 10,
              },
              shadowColor: 'black',
              shadowOpacity: 0.5,
            }}>
            {item.type}
          </Text>
          <Text
            style={{
              fontSize: 19,
              textAlign: 'center',
              color: COLORS.purple,
              shadowOffset: {
                width: 5,
                height: 10,
              },
              shadowColor: 'black',
              shadowOpacity: 0.5,
            }}>
            {item.price} VND
          </Text>
        </View>
        <View
          style={{
            marginTop: SIZES.padding * 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.emerald,
              ...FONTS.h2,
              shadowOffset: {
                width: 5,
                height: 10,
              },
              shadowColor: 'black',
              shadowOpacity: 0.5,
            }}>
            ĐÁNH GIÁ SẢN PHẨM
          </Text>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: width / 1.5,
              height: height / 3,
              borderRadius: SIZES.radius,
              margin: SIZES.padding,
            }}
          />
        </View>
        {CustomRatingBar()}
        <Text style={styles.textStyle}>
        {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>{ navigation.navigate('Home');
          alert(defaultRating)
          console.log(defaultRating)
          }}>
          <Text style={styles.buttonTextStyle}>
          Comment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() =>{
           Alert.alert(
            "Huỷ Giao Dịch",
            "Chắc Chắn Là Bạn Muốn Huỷ Giao Dịch Này",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => {navigation.navigate('Home'),console.log("Voucher")}}  
            ]
          );
        }}>
          <View style ={{ justifyContent:'center', 
          alignItems:'center', backgroundColor:COLORS.primary,
          marginTop:SIZES.padding, borderRadius:5,shadowOffset: {
            width: 5,
            height: 10,
          },
          shadowColor: 'black',
          shadowOpacity: 0.5,}}>
          <Text style  ={{margin:SIZES.padding,...FONTS.body3}}>Cancel Transaction</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGreen}}>
      <FlatList
        data={Thongbao}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
    borderRadius:5,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  buttonTextStyle: {
    color: COLORS.black,...FONTS.body3,
    textAlign: 'center',
    
  },
});
export default Notification;
