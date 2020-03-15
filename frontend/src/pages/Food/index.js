import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImgMediaCard from "../../components/ImgMediaCard";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as common from "../../settings/List";
import apiSearch from "./api/apiSearch";

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


/**
 * 오늘의 메뉴! 라고 보여주고 싶을 땐 `Food` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 */
export default function Food() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [rand, setRand] = React.useState(1);

    apiSearch({ "test": 11 });

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
