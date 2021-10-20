import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { COOKINGCLASSES } from '../shared/cookingclasses';

function RenderCookingclass({cookingclass}) {

    if (cookingclass) {
        return (
            <Card
                featuredTitle={cookingclass.name}
                image={require('./images1/kidbaking.jpeg')}
            >
                <Text style={{margin: 10}}>
                    {cookingclass.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class CookingclassInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cookingclasses: COOKINGCLASSES
        };
    }

    static navigationOptions = {
        title: 'Cookingclass Information'
    }

    render() {
        const cookingclassId = this.props.navigation.getParam('cookingclassId');
        const cookingclass = this.state.cookingclasses.filter(cookingclass => cookingclass.id === cookingclassId)[0];
        return <RenderCookingclass cookingclass={cookingclass} />;
    }
}

export default CookingclassInfo;
