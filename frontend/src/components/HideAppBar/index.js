import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const HideAppBar = ({ Content, Title, Images, onCardClick, disabled, ...props }) => {
    const { window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {/* {children} */}
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">{Title}</Typography>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

HideAppBar.propTypes = {
    /** 보여주고 싶은 이름 */
    Title: PropTypes.string.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default HideAppBar;

