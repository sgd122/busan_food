import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImgMediaCard from "../components/ImgMediaCard";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as common from "../settings/List";

import img01 from '../img/food_img01.jpg';
import img02 from '../img/food_img02.jpg';
import img03 from '../img/food_img03.jpg';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
});


const FoodList = common.Food();

const CardElements = FoodList.map((item) => {
    return (
        <ImgMediaCard
            id={item.id}
            Title={item.title}
            Content={item.content}
            Images={item.images}
        />
    )
})



export default function Food() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [rand, setRand] = React.useState(1);

    const handleClick = () => {
        const min = 1;
        const max = FoodList.length;
        const value = Math.round(min + (Math.random() * (max - min)));
        setRand(value);
        setOpen(true);
        // alert(FoodList[rand - 1].title)

    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" color="primary" disableElevation onClick={handleClick} style={{ marginBottom: 10 }}>
                음식선택
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogTitle id="alert-dialog-title">{"오늘의 음식입니다."}</DialogTitle>
                <DialogContent>
                    <ImgMediaCard
                        Title={FoodList[rand - 1].title}
                        Content={FoodList[rand - 1].content}
                        Images={FoodList[rand - 1].images}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
            <div className={classes.container}>
                {CardElements}
            </div>
        </>
    );
}
