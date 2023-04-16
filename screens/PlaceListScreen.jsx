import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlatList } from "react-native";
import PlaceItem from "../components/PlaceItem";
import { loadPlaces } from "../store/places.actions";

const PlaceListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);
  useEffect(()=>{
    dispatch(loadPlaces())
  }
  ,[])
  const renderItem = (itemData) => (
    <PlaceItem
      image={itemData.item.image}
      title={itemData.item.title}
      address="La House"
      onSelect={() => navigation.navigate("Detalle")}
    />
  );
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};


export default PlaceListScreen;
