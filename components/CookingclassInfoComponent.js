import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderCookingclass({cookingclass}) {
    if (cookingclass) {
        return (
            <Card 
                featuredTitle={cookingclass.name}
                image={require('./images1/baking.jpeg')}
            >
                <Text style={{margin: 10}}>
                    {cookingclass.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function CookingclassInfo(props) {
    return <RenderCookingclass cookingclass={props.cookingclass} />;
}

export default CookingclassInfo;
