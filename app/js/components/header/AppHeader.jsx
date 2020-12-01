import React from 'react';

import {Container, AppBar} from '@material-ui/core';

export default function AppHeader() {
    return (
        <AppBar position="fixed">
            <Container>
                <h1>Header</h1>
            </Container>
        </AppBar>
    );
}