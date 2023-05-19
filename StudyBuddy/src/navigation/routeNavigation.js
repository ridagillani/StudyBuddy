import React from "react";
import {View, Text} from 'react-native'
import StackNavigation from "./stackNavigation";
import DrawerNavigation from "./drawerNavigation";

const RouteNavigation = () => {
    return(
        <View>
            <DrawerNavigation/>
            <StackNavigation/>
        </View>
    )
}

export default RouteNavigation