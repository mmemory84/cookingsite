import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CookingclassInfo from './CookingclassInfoComponent';
import { View } from 'react-native';
import { COOKINGCLASSES, Cookingclasses } from '../shared/cookingclasses';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cookingclasses: COOKINGCLASSES,
            selectedCookingclass: null
        };
    }

    onCookingclassSelect(cookingclassId) {
        this.setState({selectedCookingclass: cookingclassId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory
                    cookingclasses={this.state.cookingclasses}
                    onPress={cookingclassId => this.onCookingclassSelect(cookingclassId)}
                />
                <CookingclassInfo
                    cookingclass={this.state.cookingclasses.filter(cookingclass => cookingclass.id === this.state.selectedCookingclass)[0]}
                />
            </View>
        )
    }
}

export default Main;