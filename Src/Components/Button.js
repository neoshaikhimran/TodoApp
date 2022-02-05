import React from "react";
import { View ,Text}from "react-native";
import { styles } from "../Css/Style";


export function Button(){
     
    return(
        <View >

                <Text style={styles.buttontext}  >
                    Add Task +
                </Text>

        </View>
    )
}