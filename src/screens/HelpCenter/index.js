import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function HelpCenter({navigation}) {
  const [tabName, setTabName] = useState('FAQ');
  const [showContent, setShowContent] = useState(false);
  const [showContentOne, setShowContentOne] = useState(false);
  const [showContentTwo, setShowContentTwo] = useState(false);
  const [showContentThree, setShowContentThree] = useState(false);
  const [showContentFour, setShowContentFour] = useState(false);
  return (
    <View style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.leftArrowIcon} style={styles.headerImg} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Help Center</Text>
        </View>
        <View style={styles.textFieldView}>
          <TouchableOpacity>
            <Image source={images.searchIcon2} style={styles.searchImg} />
          </TouchableOpacity>
          <TextInput placeholder="Search for" style={styles.textField} />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setTabName('FAQ');
            }}>
            <Text style={styles.textStyling}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTabName('New Password');
            }}>
            <Text style={styles.textStyling}>New Password</Text>
          </TouchableOpacity>
        </View>
        {tabName === 'FAQ' ? (
          <View style={styles.horiLine}></View>
        ) : (
          <View style={[styles.horiLine, styles.left]}></View>
        )}
        <View style={styles.horizontalLine}></View>

        {tabName === 'FAQ' ? (
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.horizontalRow}>
                <TouchableOpacity>
                  <View style={styles.viewBorderStyling}>
                    <Text style={styles.textStylingRow}>All</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.viewBorderStyling2}>
                    <Text style={styles.textStylingRow2}>Services</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.viewBorderStyling2}>
                    <Text style={styles.textStylingRow2}>General</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.viewBorderStyling2}>
                    <Text style={styles.textStylingRow2}>Account</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View
              style={
                showContent ? styles.bottomMainView : styles.bottomMainView2
              }>
              <View style={styles.bottomViewAllingment}>
                <Text style={styles.viewTextSty}>
                  Can i track my order delivery status?
                </Text>
                <TouchableOpacity onPress={() => setShowContent(!showContent)}>
                  <Image
                    source={showContent ? images.upArrow : images.downArrow}
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
              {showContent && (
                <View>
                  <View style={showContent && styles.line}></View>
                  <Text style={styles.bottomParaSty}>
                    Lorem ipsum dolor sit amet consectetur. Bibendum lobortis at
                    vel integer.
                  </Text>
                </View>
              )}
            </View>
            <View
              style={
                showContentOne ? styles.bottomMainView : styles.bottomMainView2
              }>
              <View style={styles.bottomViewAllingment}>
                <Text style={styles.viewTextSty}>
                  Is there a return Policy?
                </Text>
                <TouchableOpacity
                  onPress={() => setShowContentOne(!showContentOne)}>
                  <Image
                    source={showContentOne ? images.upArrow : images.downArrow}
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
              {showContentOne && (
                <View>
                  <View style={styles.line}></View>
                  <Text style={styles.bottomParaSty}>
                    Lorem ipsum dolor sit amet consectetur. Bibendum lobortis at
                    vel integer.
                  </Text>
                </View>
              )}
            </View>
            <View
              style={
                showContentTwo ? styles.bottomMainView : styles.bottomMainView2
              }>
              <View style={styles.bottomViewAllingment}>
                <Text style={styles.viewTextSty}>
                  Can I save my favourite item for later?
                </Text>
                <TouchableOpacity
                  onPress={() => setShowContentTwo(!showContentTwo)}>
                  <Image
                    source={showContentTwo ? images.upArrow : images.downArrow}
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
              {showContentTwo && (
                <View>
                  <View style={styles.line}></View>
                  <Text style={styles.bottomParaSty}>
                    Lorem ipsum dolor sit amet consectetur. Bibendum lobortis at
                    vel integer.
                  </Text>
                </View>
              )}
            </View>
            <View
              style={
                showContentThree
                  ? styles.bottomMainView
                  : styles.bottomMainView2
              }>
              <View style={styles.bottomViewAllingment}>
                <Text style={styles.viewTextSty}>
                  What payment method are accepted?
                </Text>
                <TouchableOpacity
                  onPress={() => setShowContentThree(!showContentThree)}>
                  <Image
                    source={
                      showContentThree ? images.upArrow : images.downArrow
                    }
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
              {showContentThree && (
                <View>
                  <View style={styles.line}></View>
                  <Text style={styles.bottomParaSty}>
                    Lorem ipsum dolor sit amet consectetur. Bibendum lobortis at
                    vel integer.
                  </Text>
                </View>
              )}
            </View>
            <View
              style={
                showContentFour ? styles.bottomMainView : styles.bottomMainView2
              }>
              <View style={styles.bottomViewAllingment}>
                <Text style={styles.viewTextSty}>How do i add review?</Text>
                <TouchableOpacity
                  onPress={() => setShowContentFour(!showContentFour)}>
                  <Image
                    source={showContentFour ? images.upArrow : images.downArrow}
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
              {showContentFour && (
                <View>
                  <View style={styles.line}></View>
                  <Text style={styles.bottomParaSty}>
                    Lorem ipsum dolor sit amet consectetur. Bibendum lobortis at
                    vel integer.
                  </Text>
                </View>
              )}
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.passViewMain}>
              <View style={styles.bottomViewAllingment}>
                <View style={styles.Img}>
                  <Image source={images.support} style={styles.passViewSty} />
                  <Text style={styles.passTextSty}>Customer Services</Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={images.downArrow}
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={
                showContentFour ? styles.bottomMainView : styles.bottomMainView2
              }>
              <View style={styles.bottomViewAllingment}>
                <View style={styles.Img}>
                  <Image source={images.whatsApp} style={styles.passViewSty} />
                  <Text style={styles.passTextSty}>WhatsApp</Text>
                </View>
                <TouchableOpacity
                  onPress={() => setShowContentFour(!showContentFour)}>
                  <Image
                    source={showContentFour ? images.upArrow : images.downArrow}
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
              {showContentFour && (
                <View>
                  <View style={styles.line}></View>
                  <Text style={styles.bottomParaSty2}>● (234) 555-0123</Text>
                </View>
              )}
            </View>
            <View style={styles.passViewMain}>
              <View style={styles.bottomViewAllingment}>
                <View style={styles.Img}>
                  <Image source={images.website} style={styles.passViewSty} />
                  <Text style={styles.passTextSty}>Website</Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={images.downArrow}
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.passViewMain}>
              <View style={styles.bottomViewAllingment}>
                <View style={styles.Img}>
                  <Image source={images.facebook} style={styles.passViewSty} />
                  <Text style={styles.passTextSty}>Facebook</Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={images.downArrow}
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.passViewMain}>
              <View style={styles.bottomViewAllingment}>
                <View style={styles.Img}>
                  <Image source={images.twitter} style={styles.passViewSty} />
                  <Text style={styles.passTextSty}>Twitter</Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={images.downArrow}
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.passViewMain}>
              <View style={styles.bottomViewAllingment}>
                <View style={styles.Img}>
                  <Image source={images.insta} style={styles.passViewSty} />
                  <Text style={styles.passTextSty}>Instagram</Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={images.downArrow}
                    style={styles.downArrowSty}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <View style={styles.height}></View>
      </ScrollView>
    </View>
  );
}
