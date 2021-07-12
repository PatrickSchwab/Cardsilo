import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Image} from "native-base";

export const Card = (props) => {

    const [imageLoading, setImageLoading] = useState(true);

    return(
        <>
            <TouchableOpacity
                style={styles.cardComp}
                onPress={() => props.navigateToCardView(props.item.id)}
            >
                <Image
                    source = { imageLoading
                        ?
                        { uri: 'https://logo.clearbit.com/'+props.item.companyName.toLowerCase()+'.ch?size=500' }
                        :
                        { uri: 'https://logo.clearbit.com/'+props.item.companyName.toLowerCase()+'.com?size=500' }
                    }
                    onError={()=>{
                        if(imageLoading){
                            setImageLoading(false)
                        }else{

                        }
                        }
                    }
                    alt={props.item.companyName + "not found"}
                    height={120}
                    resizeMode="cover"
                    borderRadius={10}
                />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    cardComp : {
        width : 150,
        height : 120,
        marginLeft : 15,
        marginTop: 20,
        borderRadius : 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: "#dbd7d7"
    }
});