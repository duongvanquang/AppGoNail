import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {COLORS, FONTS, icons, SIZES} from '../constants';

const Profile = ({route,navigation}) => {
  const setUserName = route.params;
  function hearderInfor() {
    return (
      <View style={{flex: 0.5}}>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#CCFFFF',
            shadowOffset: {width: 4, height: 10},
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 3,
            marginTop: Platform.OS == 'android' ? 30 : null,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Image
              source={icons.user}
              style={{
                marginTop: SIZES.padding * 2,
                shadowOffset: {width: 4, height: 10},
                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 3,
                width: 100,
                height: 100,
              }}
            />
            <View style={{marginTop: SIZES.padding}}>
              <Text style={{color: COLORS.red, ...FONTS.body3}}>
                {setUserName}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  function renderBottomInfor() {
    return (
      <View style={{margin: SIZES.base, flex: 8, flexDirection: 'column'}}>
        <View style={styles.styleImage}>
          <Image source={icons.bookmark} style={{width: 30, heoght: 30}} />
          <View style={{marginLeft: 20}}>
            <Text style={{color: COLORS.red, ...FONTS.body2}}> SỞ THÍCH</Text>
          </View>
        </View>
        <View style={styles.styleImage}>
          <Image source={icons.compass} style={{width: 40, height: 40}} />
          <View style={{marginLeft: 20}}>
            <Text style={{color: COLORS.red, ...FONTS.body2}}>
              {' '}
              GỢI Ý CHO BẠN
            </Text>
          </View>
        </View>
        <View style={styles.styleImage}>
          <Image source={icons.barcode} style={{width: 40, height: 40}} />
          <View style={{marginLeft: 20}}>
            <Text style={{color: COLORS.red, ...FONTS.body2}}>
              {' '}
              CHECK MÃ CODE
            </Text>
          </View>
        </View>
        <View style={styles.styleImage}>
          <Image source={icons.bus} style={{width: 40, height: 45}} />
          <View style={{marginLeft: 20}}>
            <Text style={{color: COLORS.red, ...FONTS.body2}}>
              {' '}
              CÁC CHUYẾN XE BUÝT DÀNH CHO BAN
            </Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      {hearderInfor()}
      <ScrollView
        style={{
          flex: 0.8,
          backgroundColor: COLORS.yellow,
          shadowOffset: {width: 4, height: 10},
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 3,
        }}>
        {renderBottomInfor()}
      </ScrollView>
      <View
        style={{
          flex: 0.3,
          backgroundColor: COLORS.purple,
          shadowOffset: {width: 4, height: 10},
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 3,justifyContent:'center', alignItems:'center'
        }}>
          <TouchableOpacity 
          onPress ={()=>{
            navigation.navigate('UserOrClient')
          }}
          >
            <Text style  ={{ textAlign:'center', marginBottom:70,color:COLORS.green,...FONTS.body2}}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  styleImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    borderColor: '#dddddd',
    shadowOffset: {width: 4, height: 10},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 3,
  },
});
export default Profile;
