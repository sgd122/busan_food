import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';


function SkeletonMediaCard(props) {
    const { loading = false } = props;

    return (
        <Grid container wrap="nowrap">
            <Box width={210} marginRight={0.5} my={5}>
                <Skeleton variant="rect" width={210} height={118} />
                <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="60%" />
                </Box>
            </Box>
        </Grid>
    );
}

SkeletonMediaCard.propTypes = {
    loading: PropTypes.bool,
};

export default function YouTube() {
    return (
        <Box overflow="hidden">
            <SkeletonMediaCard loading />
        </Box>
    );
}
