import { Drawer } from "expo-router/drawer";
import { useCallback, useEffect } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { COLORS } from '../constants';

SplashScreen.preventAutoHideAsync();

// Custom Drawer Content Component
function CustomDrawerContent(props) {
    const router = useRouter();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                {/* Custom Header Section */}
                <View style={{ 
                    padding: 20, 
                    backgroundColor: COLORS.primary, 
                    marginBottom: 10 
                }}>
                    <Image 
                        source={require('../assets/images/user.png')} // Add your image
                        style={{ 
                            width: 80, 
                            height: 80, 
                            borderRadius: 40,
                            marginBottom: 10 
                        }}
                    />
                    <Text style={{ 
                        color: 'white', 
                        fontSize: 18, 
                        fontWeight: 'bold' 
                    }}>
                        Your Name
                    </Text>
                    <Text style={{ color: 'white', fontSize: 14 }}>
                        your.email@example.com
                    </Text>
                </View>

                {/* Default Drawer Items */}
                <DrawerItemList {...props} />

                {/* Custom Drawer Items */}
                <DrawerItem
                    label="Settings"
                    onPress={() => router.push('/settings')}
                    icon={({ color, size }) => (
                        <Text style={{ fontSize: size }}>⚙️</Text>
                    )}
                />
                
                <DrawerItem
                    label="Help"
                    onPress={() => router.push('/help')}
                    icon={({ color, size }) => (
                        <Text style={{ fontSize: size }}>❓</Text>
                    )}
                />

                <DrawerItem
                    label="Logout"
                    onPress={() => {
                        // Handle logout
                        console.log('Logout pressed');
                    }}
                    icon={({ color, size }) => (
                        <Text style={{ fontSize: size }}>🚪</Text>
                    )}
                    labelStyle={{ color: 'red' }}
                />
            </DrawerContentScrollView>

            {/* Footer Section */}
            <View style={{ 
                padding: 20, 
                borderTopWidth: 1, 
                borderTopColor: '#ccc' 
            }}>
                <Text style={{ fontSize: 12, color: '#666' }}>
                    Version 1.0.0
                </Text>
            </View>
        </View>
    );
}

const Layout = () => {
    const [fontsLoaded, fontError] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
        if (fontError) {
            SplashScreen.hideAsync(); 
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <Drawer
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                    screenOptions={{
                        drawerPosition: 'left',
                        headerShown: false,
                        drawerStyle: {
                            backgroundColor: '#fff',
                            width: 280,
                        },
                        drawerActiveTintColor: COLORS.primary,
                        drawerInactiveTintColor: '#666',
                    }}
                >
                    <Drawer.Screen
                        name="index"
                        options={{
                            drawerLabel: 'Home',
                            title: 'Home',
                        }}
                    />
                </Drawer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

export default Layout;
