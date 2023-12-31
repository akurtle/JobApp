
import { View, 
Text,
TouchableOpacity,
ActivityIndicator } from 'react-native'



import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'

import {COLORS} from '../../../constants/theme'

import  NearbyJobCard  from '../../common/cards/nearby/NearbyJobCard'

import  useFetch  from '../../../hook/useFetch'


const Nearbyjobs = ({job,handleNavigate}) => {
  
  const router = useRouter()

  const {data,isLoading,error,refetch}=useFetch(
    'search',{
      query:"React Developer",
      num_pages:"1"
    }
  )
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading?<ActivityIndicator size='large' color={COLORS.primary}/>:error ?(
          <Text>Something went wrong</Text>
        ):(
          data?.map((job)=>(
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={()=>router.push(`/job-details/${job.job_id}`)}
              onPress={handleCardPress}

            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs