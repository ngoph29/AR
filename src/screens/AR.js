import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Modal,
    ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { CameraScreen, Camera } from "react-native-camera-kit";

function ARScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [showCamera, setShowCamera] = useState(false);
    
    useEffect(() => {
        (async () => {
          const status = await Camera.checkDeviceCameraAuthorizationStatus();
          setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.button} onPress={() => setShowCamera(true)}>
            </TouchableOpacity>
            <Modal visible={showCamera} animationType="slide">
                <CameraScreen
                    hideControls={false}
                    style={styles.camera}
                    ref={(ref) => {
                        setCamera(ref);
                    }}
                ></CameraScreen>
            </Modal>
        </View>
        
    );

}
  
export default ARScreen;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "coral",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
});