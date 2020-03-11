import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        minWidth: 300,
        marginRight: 10,
        marginBottom: 10,
    },
});

const handleClick = (id) => {
    alert(id)
}
export default function ImgMediaCard({ ...props }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={(e) => handleClick(props.id)}
            >
                <CardMedia
                    component="img"
                    alt={props.Content}
                    height="140"
                    image={props.Images}
                    title={props.Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.Title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.Content}
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p">
                        {/* 투표 : 0 */}
                        <Chip
                            icon={<FaceIcon />}
                            label="투표 : 0"
                            clickable
                            color="primary"
                            style={{ marginTop: 10 }}
                            deleteIcon={<DoneIcon />}
                        />
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions> */}
        </Card>
    );
}