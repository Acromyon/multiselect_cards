import React from 'react';

import {Container, Box } from '@material-ui/core';

import classes from './style.module.scss';

export default function AppFooter() {
    return (
        <Box
            component="footer"
            className="footer"
            bgcolor="primary.light"
        >
            <Container>
                <Box className={classes.footerWrapper}>
                    <Box
                        component="span"
                        align="center"
                        color="primary.contrastText"
                        className={classes.footerCopyright}
                    >
                        @ 2020, by Denis Domrachev
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}