import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './common';

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAOTrGPdxpxSpOmsI4kLep8XcaPP4MvcHs",
            authDomain: "auth-f7eba.firebaseapp.com",
            databaseURL: "https://auth-f7eba.firebaseio.com",
            projectId: "auth-f7eba",
            storageBucket: "auth-f7eba.appspot.com",
            messagingSenderId: "317636186005",
            appId: "1:317636186005:web:c11e3c6779237fcc"
        });
    }

    render() {
        return (
            <View>
                <Header title='auth' />
                <CardSection>
                    <Button> Log In</Button>
                </CardSection>
            </View>
        );
    }
}

export default App;