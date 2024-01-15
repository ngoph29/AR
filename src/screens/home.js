import { StyleSheet, ScrollView, FlatList, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";
import { FAB } from "react-native-paper";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <FAB
            style={styles.fab}
            icon="camera"
            color="black"
            onPress={() => navigation.navigate("AR")}
        ></FAB>
        </View>
        
    );
}

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        bottom: 0,
        alignSelf: "flex-end",
        borderRadius: 100,
        backgroundColor: "coral",
        margin: 16,
        right: 0,
      },
});

