import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function Language() {
  const [suggested, setSuggested] = useState([
    {name: 'English (US)', check: true},
    {name: 'English (UK)', check: false},
  ]);

  const[language, setLanguage] = useState([
    {name: 'Mandarin', check: true},
    {name: 'Spanish', check: false},
    {name: 'French', check: false},
    {name: 'Arabic', check: false},
    {name: 'Bangali', check: false},
  ])

  const handleSetSuggested = myIndex => {
    const newSuggested = [...suggested];
    newSuggested.forEach((item, index) => {
      item.check = index === myIndex;
    });
    setSuggested(newSuggested);
  };

  const handleSetLanguage = myIndex => {
    const newLanguage = [...language];
    newLanguage.forEach((item, index)=>{
        item.check = index === myIndex;
    })
    setLanguage(newLanguage)
  }

  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <Header title={'Language'} />
        <View style={styles.padding}>
          <Text style={styles.headingSty}>Suggested</Text>
          <View style={styles.topMainView}>
            {suggested.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.MainviewSty}
                  onPress={() => {
                    handleSetSuggested(index);
                  }}>
                  <Text style={styles.viewTextSty}>{item.name}</Text>
                  <Image
                    source={item.check ? images.clickOpen : images.clickOff}
                    style={styles.ViewImg}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.headingSty2}>Language</Text>
          <View style={styles.topMainView}>
            {language.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.MainviewSty}
                  onPress={()=> {
                    handleSetLanguage(index);
                  }}>
                  <Text style={styles.viewTextSty}>{item.name}</Text>
                  <Image
                    source={item.check ? images.clickOpen : images.clickOff}
                    style={styles.ViewImg}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
