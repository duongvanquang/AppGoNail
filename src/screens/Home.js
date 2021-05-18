import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const {width, height} = Dimensions.get('screen');
const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [data, setData] = React.useState([
    {
      id: 0,
      name: 'Nguyễn Văn A',
      location: 'Quận 1',
      YearofBirth: 1995,
      image: {
        uri: 'https://upanh123.com/wp-content/uploads/2021/02/hinh-nen-anh-thien-nhien.jpg',
      },
     
        
          img: {
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6VCmOCK-sqssSlgJxAlE0MADpyX3nrLFqQ&usqp=CAU',
          },
          title: 'làm Móng',
          
          price: '70 vnd',
        
      description: 'cắt tỉa làm móng, vệ sinh ....',
    },
    {
      id: 1,
      name: 'Trần Văn B',
      location: 'Quận 2',
      YearofBirth: 1990,
      image: {
        uri: 'https://lh3.googleusercontent.com/proxy/DrtR_1exCvNflwj-YHCySw9CSqbqbWkSumO3xxXkXh9L8zd3WmOGZfY5yY3PAK4co36UbXbbvnJ8UoXd-VjIa0MBABKL_xoI7FOs7PNXWJQwCqU6JU40gB3watMvOtvTNA',
      },
      service:[
        {
          image: {
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wOUfVFuOhhM9PwBmp54cbpBKmhweauOrUg&usqp=CAU',
          },
          title: 'Sơn móng',
          description: 'cắt tỉa làm móng, vệ sinh ....',
          price: '60 vnd',
        },
      ],
    },
    {
      id: 2,
      name: 'Nguyễn Văn Tèo',
      location: 'Thủ Đức',
      YearofBirth: 1989,
      image: {
        uri: 'https://www.thiennhien.net/wp-content/uploads/2020/04/240420_dadangsinhhoc.jpg',
      },
      
        
          img: {
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd-yPhXuFkf3lXd00PTrYdElDKluAgr7lHg&usqp=CAU',
          },
          title: 'đắp kiểu móng',
          description: 'cắt tỉa làm móng, vệ sinh ....',
          price: '150 vnd',
       
    },
    {
      id: 3,
      name: 'Nguyễn Văn Tí',
      location: 'Quận 9',
      YearofBirth: 1993,
      image: {
        uri: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
      },
      service: [
        {
          img: {
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBtUzyDZeazOxTrfvGsuxVCzcVOZaxZ8y3A&usqp=CAU',
          },
          title: 'gắng hột',
          description: 'cắt tỉa làm móng, vệ sinh ....',
          price: '200 vnd',
        },
      ],
    },
  ]);
  function renderHeader() {
    return (
      <View style={{height: '20%', backgroundColor: COLORS.white}}>
        <View
          style={{
            flex: 1,
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
                navigation.navigate('Profile');
              }}>
              <Image
                source={icons.menu}
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
                  navigation.navigate('Profile');
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
            <TextInput
              placeholder="Search"
              placeholderTextColor="#b1e5d3"
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                width: 260,
              }}
            />
            <Image source={icons.search} style={{width: 20, height: 20}} />
          </View>
        </LinearGradient>
      </View>
    );
  }
  function renderData() {
    function renderItem(item, index) {
      var destinationStyle = {};
      if (index == 0) {
        destinationStyle = {
          marginLeft: SIZES.padding,
        };
      }
      return (
        <View style={{marginTop: SIZES.padding}}>
          <View style={styles.styleimg}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                marginHorizontal: SIZES.base,
                ...destinationStyle,
                ...styles.shadow,
              }}
              onPress={() => {
                navigation.navigate('Profile', item);
              }}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 25,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.padding,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{textAlign:'center',color: COLORS.red, ...FONTS.body3}}>
                  {item.name}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.padding,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: SIZES.padding,
                }}>
                <Text style={{color: COLORS.red, ...FONTS.body3}}>
                  {item.location}
                </Text>
                <Text style={{color: COLORS.red, ...FONTS.body3}}>
                  {item.YearofBirth}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    );
  }
  function renderimageTitle() {
    return (
      <View>
        <View
          style={{padding: SIZES.padding, backgroundColor: COLORS.lightGray2}}>
          <Text style={{...FONTS.h3, color: COLORS.primary}}>
            INCOMING EXPENSES
          </Text>
          <Text style={{...FONTS.body4, color: COLORS.darkgray}}>
            Tota: {data.length}
          </Text>
        </View>
      </View>
    );
  }

  function renderimage() {
    const renderItem = ({item, index}) => {
      return (
        <View
          style={{
            width: 300,
            marginRight: SIZES.padding,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginVertical: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...styles.shadow,
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: SIZES.padding,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: COLORS.lightGray,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: SIZES.base,
              }}>
              <Image
                source={item.img}
                style={{
                  width: width / 8,
                  height: height / 16,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text style={{...FONTS.h3, color: COLORS.purple}}>
              {item.title}
            </Text>
          </View>
          <View style={{paddingHorizontal: SIZES.padding}}>
            <Text style={{...FONTS.h2}}>{item.title}</Text>
            <Text
              style={{
                ...FONTS.body3,
                flexWrap: 'wrap',
                color: COLORS.darkgray,
              }}>
              {item.description}
            </Text>
            <Text style={{marginTop: SIZES.padding, ...FONTS.h4}}>
              Location
            </Text>
          </View>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomStartRadius: SIZES.radius,
              borderBottomEndRadius: SIZES.radius,
              backgroundColor: COLORS.secondary,
            }}>
            <Text style={{color: COLORS.white, ...FONTS.body3}}>
              {item.price}
            </Text>
          </View>
        </View>
      );
    };
    return (
      <View>
        {renderimageTitle()}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightRed}}>
      {renderHeader()}
      <Text
        style={{
          color: COLORS.green,
          ...FONTS.h2,
        }}>
        Welcome to our service.
      </Text>
      <ScrollView>
        {renderData()}
        {renderimage()}
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
  styleimg: {
    height: height / 4,
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGreen,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    borderRadius: 6,
    margin: SIZES.padding * 2,
  },
});
export default Home;
