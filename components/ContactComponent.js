import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
  

  static navigationOptions = {
    title: "Contact Us",
  };

  sendMail() {
    MailComposer.composeAsync({
        recipients: ['campsites@nucamp.co'],
        subject: 'Inquiry',
        body: 'To whom it may concern:'
    })
}

  render() {

    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Card
            title="Contact Information"
            wrapperstyle={{ margin: 20 }}
          >
            <Text>Are 18</Text>
            <Text>Lilongwe, Malawi.</Text>
            <Text style={{marginBottom: 10}}>U.S.A.</Text>

            <Text>Phone: 12345121212</Text>
            <Text>Email: dee'skitchen@gmail.co</Text>
            <Button
                  title="Send Email"
                  buttonStyle={{backgroundColor: '#d2691e', margin: 40}}
                  icon={<Icon
                      name='envelope-o'
                      type='font-awesome'
                      color='#fff'
                      iconStyle={{marginRight: 10}}
                  />}
                  onPress={() => this.sendMail()}
              />

          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;