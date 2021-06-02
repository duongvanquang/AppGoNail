import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {COLORS, SIZES, icons, FONTS, images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {Svg, Polygon} from 'react-native-svg';

const {width, height} = Dimensions.get('screen');
const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [data, setData] = React.useState([
    {
      id: 0,
      name: 'Nguyen Van Teo',
      img: {
        uri: 'https://i.pinimg.com/originals/a8/45/76/a84576a04c1874304735604d9f47d5a4.jpg',
      },
      bgcolor: 'red',
      location: 'Thu Duc',
      menu: [
        {
          menuId: 1,
          type: 'lam momg',
          photo: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Polished_purple_nails_with_nail_art_on.jpg',
          },
          description:
            'lam ve sinh cat tia mong voi nhung ky thuat hien dai nhat',
          price: 80,
        },
        {
          menuId: 2,
          type: 'Cat tia ve sinh',
          photo: {
            uri: 'https://i.pinimg.com/originals/7a/0c/cd/7a0ccdc0d9ad09bca78460647be208dc.jpg',
          },
          description:
            'ngam nuoc sau do tien hanh cat tia voi ky nang chuyen nghiep cua nhan vien',
          price: 60,
        },
        {
          menuId: 3,
          type: 'dap bot ngan hot len mong',
          photo: {
            uri: 'https://thanhhoahomes.com/wp-content/uploads/2020/05/dia-chi-lam-nail-bien-hoa-2.jpg',
          },
          description:
            'tien hanh gan mot lop hoa chat len mong sau do tien hanh gan hot',
          price: 130,
        },
        {
          menuId: 4,
          type: 'son mong ky thiet 3D',
          photo: {
            uri: 'https://inail.vn/data/upload/Mau-nail-cong-so-ombre.jpg',
          },
          description:
            'lay dung dich da duoc chi dinh quet mot lop mong len mong sau do tien hanh hon theo yeu cau',
          price: 150,
        },
      ],
    },
    {
      id: 1,
      name: 'Nguyen Thi Cam Thy',
      img: {
        uri: 'https://biettuot.info/wp-content/uploads/2021/03/tron-bo-anh-thien-nhien-chat-luong-cao-2k-4k-lam-hinh-nen-desktop-1.jpg',
      },
      bgcolor: 'yellow',
      location: 'Quan 9',
      menu: [
        {
          menuId: 5,
          type: 'dap bot ngan hot len mong',
          photo: {
            uri: 'https://thanhhoahomes.com/wp-content/uploads/2020/05/dia-chi-lam-nail-bien-hoa-2.jpg',
          },
          description:
            'tien hanh gan mot lop hoa chat len mong sau do tien hanh gan hot',
          price: 130,
        },
        {
          menuId: 6,
          type: 'Thieu theo yeu cau',
          photo: {
            uri: 'https://znews-photo.zadn.vn/w660/Uploaded/pnbcuhbatgunb/2021_01_29/nail_1.jpg',
          },
          description:
            'sau khi nhan duoc su yeu cau tu khach hang tien hanh lam',
          price: 200,
        },
      ],
    },
    {
      id: 2,
      name: 'Tran Thi Thanh',
      img: {
        uri: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
      },
      bgcolor: 'blue',
      location: 'Di an binh duong',
      menu: [
        {
          menuId: 7,
          type: 'Ve mong theo yeu cau khach hang',
          photo: {uri: 'https://i.ytimg.com/vi/t-5Rs5HszVY/maxresdefault.jpg'},
          description: 'Tien hanh lam ve sinh de chuan bi cho viec ve mong',
          price: 250,
        },
        {
          menuId: 8,
          type: 'dap bot ngan hot len mong',
          photo: {
            uri: 'https://thanhhoahomes.com/wp-content/uploads/2020/05/dia-chi-lam-nail-bien-hoa-2.jpg',
          },
          description:
            'tien hanh gan mot lop hoa chat len mong sau do tien hanh gan hot',
          price: 130,
        },
        {
          menuId: 9,
          type: 'son mong ky thiet 3D',
          photo: {
            uri: 'https://inail.vn/data/upload/Mau-nail-cong-so-ombre.jpg',
          },
          description:
            'lay dung dich da duoc chi dinh quet mot lop mong len mong sau do tien hanh hon theo yeu cau',
          price: 150,
        },
        {
          menuId: 10,
          type: 'Thieu theo yeu cau',
          photo: {
            uri: 'https://znews-photo.zadn.vn/w660/Uploaded/pnbcuhbatgunb/2021_01_29/nail_1.jpg',
          },
          description:
            'sau khi nhan duoc su yeu cau tu khach hang tien hanh lam',
          price: 200,
        },
      ],
    },
    {
      id: 4,
      name: 'Nguyen Van Teo',
      img: {
        uri: 'https://i.pinimg.com/originals/a8/45/76/a84576a04c1874304735604d9f47d5a4.jpg',
      },
      bgcolor: 'red',
      location: 'Thu Duc',
      menu: [
        {
          menuId: 1,
          type: 'lam mong',
          photo: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Polished_purple_nails_with_nail_art_on.jpg',
          },
          description:
            'lam ve sinh cat tia mong voi nhung ky thuat hien dai nhat',
          price: 80,
        },
      ],
    },
  ]);
  function renderHeader() {
    return (
      <View style={{ backgroundColor: COLORS.white}}>
        <View
          style={{
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.red,
          }}>
          <View
            style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.replace('Login');
              }}>
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: COLORS.yellow, ...FONTS.h2}}>Go Nail</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Notification');
                }}>
                <Image
                  source={icons.bell}
                  resizeMode="contain"
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <LinearGradient
          colors={[COLORS.red, COLORS.yellow, 'transparent']}
          style={{
            left: 0,
            right: 0,
            height: 80,
            marginTop: -45,
          }}>
          <View
            style={{
              backgroundColor: '#FFF',
              paddingVertical: 8,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 25,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => {
                navigation.navagate('Filter', item);
              }}>
              <TextInput focusable ={true}
                placeholder="Search"
                placeholderTextColor="#b1e5d3"
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  width: 260,
                  paddingVertical: 0
                }}
              />
              <Image source={icons.search} style={{width: 20, height: 20}} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
  function renderItem({item}) {
    return (
      <View
        style={[
          {flex: 1, justifyContent: 'center', alignItems: 'center'},
          styles.shadow,
        ]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Detail', item);
          }}>
          <Image
            source={item.img}
            style={{
              width: width / 2.2,
              height: height / 5,
              margin: SIZES.padding,
              borderRadius: 10,
            }}
          />
          <Text
            style={{
              color: COLORS.red,
              ...FONTS.body3,
              textAlign: 'center',
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightpurple}}>
      {renderHeader()}
      <Text
        style={{
          color: COLORS.green,
          ...FONTS.h2,
        }}>
        Welcome to our service.
      </Text>
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          numColumns={2}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.89,

    elevation: 7,
  },
});
export default Home;
