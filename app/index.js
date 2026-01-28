import { View, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from "expo-router";
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { useState } from "react";
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.menu} 
                            dimension="60%"
                            handlePress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),

                    headerLeftContainerStyle: {
            paddingLeft: 16, // Add left padding
        },
        headerRightContainerStyle: {
            paddingRight: 16, // Add right padding
        },
                    headerTitle: "",

                    
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`);
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
