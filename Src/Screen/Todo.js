import React, { useState } from "react";
import { View,Text,TouchableOpacity,TextInput,SafeAreaView,ScrollView} from 'react-native';
import { Button } from "../Components/Button";
import { styles } from "../Css/Style";
import {addTask, deleteTask} from "../Redux/Action/Action"
import { useDispatch,useSelector} from "react-redux";


export function Todo(){

    const [inputdata, setInputdata] = useState('');
    const list = useSelector((state)=> state.Reducer.list);
    const dispatch = useDispatch();
    
    return(
        
        <View style={styles.container}>
           
                <Text style={styles.headeingtext}>Today Task</Text>
            
                <View style={styles.inputFeild}>
                        
                        <TextInput placeholder="Add task "  style={styles.textfeild} value={inputdata} placeholderTextColor={'black'}
                            onChangeText={(text)=> setInputdata(text)}/>
                </View>
                
                <View style={styles.midle}>  
                <ScrollView> 
                    {
                        list.map((elem)=>{

                            return(
                               
                             <View key={elem.id} style={styles.deldata}>
                                    <View style={styles.newbase}>
                                        <Text  style={styles.outtext}>{elem.data}</Text>
                                    </View>
                                    <View style={styles.delback}>
                                        <Text onPress={() =>dispatch(deleteTask(elem.id))} style={styles.deltext}>Delete Task - </Text>
                                    </View>
                            </View>
                            
                            )


                        })
                    }
                    </ScrollView>
                    
                </View>
                
                
            
                <View  style={styles.button}>
                    <TouchableOpacity  onPress={() =>dispatch(addTask(inputdata),
                        setInputdata(''))}>
                        <Button />
                    </TouchableOpacity>
                    
                </View>
                
        
        </View>
        
    )
}