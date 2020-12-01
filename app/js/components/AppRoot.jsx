import React from 'react';

import {CssBaseline, Box} from '@material-ui/core';

import AppHeader from './header/AppHeader';
import AppContent from './content/AppContent';
import AppFooter from './footer/AppFooter';

export default function AppRoot() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box className="wrapper">
                <AppHeader />
                <AppContent />
            </Box>
            <AppFooter />
        </React.Fragment>
    );
}