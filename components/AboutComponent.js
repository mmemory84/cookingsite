import React, { Component } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import Loading from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl";
import * as Animatable from 'react-native-animatable';


const mapStateToProps = (state) => {
  return {
    cookingclasses: state.cookingclasses,
  };
};

const Mission = () => {
  return (
    <Card title="Our Mission">
      <Text style={{ margin: 10 }}>
        At Dee's Kitchn our mission is centered around why we believe in making cooking fun for kids: We do it because cooking is fun – and a valuable life skill that is getting harder to come by. We do it because “real food” is really good – it tastes good and we need it for strong, healthy bodies and brains. We do it because the best way to get kids loving real food is to get them in the kitchen measuring, mixing, chopping, touching, smelling and tasting. We do it because we believe real change happens one bite at a time.
      </Text>
    </Card>
  );
};

class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const renderCookingclass = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{source: {uri: baseUrl + item.image}}}
          //leftAvatar={{ source: require("./images1/kidcooking.jpeg") }}
        />
      );
    };

    if (this.props.cookingclasses.isLoading) {
      return (
          <ScrollView>            
              <Mission />
              <Card
                  title='Featured Classes'>
                  <Loading />
              </Card>
          </ScrollView>
      );
  }
  if (this.props.cookingclasses.errMess) {
      return (
          <ScrollView>
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}> 
              <Mission />
              <Card
                  title='Featured Classes'>
                  <Text>{this.props.cookingclasses.errMess}</Text>
              </Card>
            </Animatable.View>
          </ScrollView>
      );
  }

    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Mission />
          <Card title="Featured Classes">
            <FlatList
              data={this.props.cookingclasses.cookingclasses}
              renderItem={renderCookingclass}
              keyExtractor={(item) => item.id.toString()}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(About);