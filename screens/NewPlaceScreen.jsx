import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'

import { COLORS } from '../constants'
import ImageSelector from '../components/ImageSelector'
import LocationService from '../components/LocationService'
import { addPlace } from '../store/places.actions'
import { useDispatch } from 'react-redux'

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [titleValue, setTitleValue] = useState('')
    const [imageValue, setImageValue] = useState('')

    const titleChangeHandler = text => {
        setTitleValue(text)
    }


    const savePlaceHandler = () => {
        dispatch(addPlace(titleValue,imageValue))
        navigation.navigate('Direcciones')
    }





    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput style={styles.input} onChangeText={titleChangeHandler}/>
                <ImageSelector onImage={image=>setImageValue(image)} />
                <LocationService onLocation={(lat,lng)=>console.log(lat,lng)} />
                <Button title="Guardar" color={COLORS.MAROON} onPress={savePlaceHandler} />
            </View>
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default NewPlaceScreen
