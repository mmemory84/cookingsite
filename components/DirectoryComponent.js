import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { COOKINGCLASSES } from '../shared/cookingclasses';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cookingclasses: COOKINGCLASSES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CookingclassInfo', { cookingclassId: item.id})}
                    leftAvatar={{ source: require('./images1/baking.jpeg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.cookingclasses}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;