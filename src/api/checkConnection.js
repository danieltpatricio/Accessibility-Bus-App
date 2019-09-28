import NetInfo from "@react-native-community/netinfo";

// Subscribe
export const unsubscribe = NetInfo.addEventListener(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
});

// Unsubscribe
