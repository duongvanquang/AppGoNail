import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,Alert,
  TextInput,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');
const Payment = ({route, navigation}) => {
  const [voucher, setVoucher] = React.useState(false);
  const item = route.params.item;
  const Voucher = this.item;
  const discount = Voucher?.discount || 0;
  sum = item.price - item.price * discount;
  const Thongbao = [];
  return (
    <View style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <View style={{}}>
        <Image
          source={item.photo}
          style={{
            width: width,
            height: height / 2,
            borderRadius: SIZES.radius,
          }}
        />
      </View>
      <View
        style={{marginTop: SIZES.padding, paddingHorizontal: SIZES.padding}}>
        <Text style={{...FONTS.h2}}>{item.type}</Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            color: COLORS.emerald,
            ...FONTS.body3,
          }}>
          {item.description}
        </Text>
      </View>
      <View
        style={{
          marginTop: SIZES.padding * 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: COLORS.lime, ...FONTS.h2}}>
          Thanh Toan Qua The
        </Text>
      </View>
      <View style={styles.ViewVoucher}>
        <TextInput
          onChangeText={setVoucher}
          value={voucher}
          style={styles.textInputVoucher}
          placeholder="Enter Your Voucher"
        />
        <TouchableOpacity
          onPress={async () => {
            const text = await Clipboard.getString();
            const item = JSON.parse(text);
            this.setState({text: item.code, item});
          }}>
          <Text style={styles.textPart}>Part</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: SIZES.padding, margin: SIZES.base}}>
        <LinearGradient
          style={[{height: 70, width: '100%', borderRadius: 15}]}
          colors={['#edf0fc', '#d6dfff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                flex: 1,
                marginHorizontal: SIZES.padding,
                justifyContent: 'center',
              }}>
              <Text style={{...FONTS.h1}}>{sum} VND</Text>
            </View>
            <TouchableOpacity
              style={{
                width: 130,
                height: '80%',
                marginHorizontal: SIZES.radius,
              }}
              onPress={() => {
                navigation.navigate('Home');
                Alert.alert(
                  "Notification",
                  "My Alert Msg",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "OK", onPress: () => (navigation.navigate('Notification', {Thongbao: [item]})) }
                  ]
                );
              }}>
              <LinearGradient
                style={[
                  {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  },
                ]}
                colors={['#46aeff', '#5884ff']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={{color: COLORS.white, ...FONTS.h2}}>BOOKING</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ViewVoucher: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowOffset: {
      width: 4,
      height: 7,
    },
    shadowColor: COLORS.black,
    shadowOpacity: 0.5,
    elevation: 3,
  },
  textInputVoucher: {
    margin: 5,
    borderWidth: 0.2,
    height: 35,
    width: 200,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
});
export default Payment;
