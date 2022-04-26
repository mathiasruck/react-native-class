import React from "react"
import {Text, SafeAreaView} from "react-native"
import ExampleComponent1 from "./components/ExampleComponent1"
import ExampleComponent2 from "./components/ExampleComponent2"
import ExampleComponent3 from "./components/ExampleComponent3"
import ExampleUI from "./components/ExampleUI"
import CollectionListScreen from "./screens/CollectionListScreen"


class MainComponent extends React.Component{
    render(){
        return (
            <SafeAreaView>
                {/* <ExampleComponent1 />
                <ExampleComponent2 message="Hello Reginaldo" />
                <ExampleComponent2 message="Hello Sofia" /> */}
                {/* <ExampleUI /> */}
                {/* <CollectionListScreen /> */}
                <ExampleComponent3/>
            </SafeAreaView>
        )
    }
}

export default MainComponent