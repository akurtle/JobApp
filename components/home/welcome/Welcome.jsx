import React,{useState} from 'react'
import { View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native';



const jobTypes = ['Full-Time','Part-Time','Contractor']



import styles from './welcome.style'
import { useRouter } from 'expo-router';

import {icons,SIZES} from "../../../constants"

const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {


  

  const router = useRouter();

  const [activeJobType,setActiveJobType]=useState('Full-time')


  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello</Text>
        <Text style={styles.welcomeMessage}>Find the perfect job for you!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text)=>setSearchTerm(text)}
            placeholder='What are you looking for'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}
          onPress={handleClick}
        >
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity
              style={styles.tab(activeJobType,item)}
              onPress={()=>{
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
             keyExtractor={item=>item} 
             contentContainerStyle={{columnGap:SIZES.small}}
             horizontal
        />
      </View>
    </View>
  )
}

export default Welcome