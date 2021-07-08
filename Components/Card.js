import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Image} from "native-base";

export const Card = (props) => {

    const [imageLoading, setImageLoading] = useState(true);

    return(
        <TouchableOpacity
            style={styles.cardComp}
        >
            <Image
                source = { imageLoading
                    ?
                    { uri: 'https://logo.clearbit.com/'+props.cardList[props.item.id].companyName.toLowerCase()+'.ch?size=500' }
                    :
                    { uri: 'https://logo.clearbit.com/'+props.cardList[props.item.id].companyName.toLowerCase()+'.com?size=500' }
                }
                onError={()=>setImageLoading(false)}
                alt={props.cardList[props.item.id].companyName}
                height={118}
                resizeMode="cover"
                borderRadius={9}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardComp : {
        width : 150,
        height : 120,
        marginLeft : 15,
        marginTop: 30,
        borderColor : '#707070',
        borderWidth : 1,
        borderRadius : 10,
    }
});