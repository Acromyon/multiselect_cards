import React from 'react';

import {Container, Box} from '@material-ui/core';

export default function AppContent() {
    return (
        <Box
            component="section"
            className="content"
        >
            <Container>
                <h1>Testing App!</h1>
            </Container>
        </Box>
    );
}