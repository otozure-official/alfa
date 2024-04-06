import React from 'react';
import View from 'react-native';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import TimelineScreen from './TimelineScreen';
import Login from './login';

export default function App(){
        return(
                <TimelineScreen />
        );
    }