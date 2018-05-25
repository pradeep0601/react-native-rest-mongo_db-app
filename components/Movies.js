import React, { Component } from 'react';
import {
View,
Text,
ScrollView
} from 'react-native';

import { movies } from '../resources/data';

export default class Movies extends Component {
render(){
return(
<View>
<ScrollView>
{movies.map((movie, index) => <Text key={ index }>{movie.title}</Text>)}
</ScrollView>
</View>
);
}
}