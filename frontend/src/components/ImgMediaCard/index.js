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
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        minWidth: 300,
        marginRight: 10,
        marginBottom: 10,
    },
});

const ImgMediaCard = ({ Content, Title, Images, onCardClick, ...props }) => {
    const classes = useStyles();
    const handleClick = (id) => {
        // onCardClick
        alert(id)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={(e) => handleClick(props.id)}
            >
                <CardMedia
                    component="img"
                    alt={Content}
                    height="140"
                    image={Images}
                    title={Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {Title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {Content}
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
};

ImgMediaCard.propTypes = {
    /** 아이디 */
    id: PropTypes.string.isRequired,
    /** 보여주고 싶은 이름 */
    Title: PropTypes.string.isRequired,
    /** 상세내용 */
    Content: PropTypes.string,
    /** 이미지 */
    Images: PropTypes.string,
    /** Card 버튼 누를 때 호출할 함수 */
    onCardClick: PropTypes.func,
};

ImgMediaCard.defaultProps = {
    id: 1,
    Title: ""
};


export default ImgMediaCard;