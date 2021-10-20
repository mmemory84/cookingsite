import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { COOKINGCLASSES } from '../shared/cookingclasses';
import { RECIPES } from '../shared/recipes';
//import { MOREINFO } from '../shared/MoreInfo';
function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images1/kidcooking.jpeg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cookingclasses: COOKINGCLASSES,
            recipes: RECIPES
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.cookingclasses.filter(cookingclass => cookingclass.featured)[0]}
                />
                <RenderItem 
                    item={this.state.recipes.filter(recipe => recipe.featured)[0]}
                />
                
            </ScrollView>
        );
    }
}

export default Home;