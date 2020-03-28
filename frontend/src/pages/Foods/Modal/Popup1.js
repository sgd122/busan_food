import React, { useEffect } from 'react';
import ImgMediaCard from "../../../components/ImgMediaCard";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//* redux(Start)
import * as actions from '../../../reducers/Foods/useActions';
import { useSelector, useDispatch } from 'react-redux';
//* redux(End)

function Popup1() {
    const dispatch = useDispatch();
    const cardList = useSelector(store => store.foods.cardList);
    const open = useSelector(store => store.foods.open);
    const rand = useSelector(store => store.foods.rand);

    const handleClose = () => {
        dispatch(actions.setOpen(false));
    };

    return (
        <div>
            {/* Popup */}
            {cardList && cardList.length > 0 &&
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >

                    <DialogTitle id="alert-dialog-title">{"오늘의 음식입니다."}</DialogTitle>
                    <DialogContent>
                        <ImgMediaCard
                            id={cardList[rand - 1].id}
                            Title={cardList[rand - 1].title}
                            Content={cardList[rand - 1].content}
                            Images={cardList[rand - 1].images}
                            disabled
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            닫기
                    </Button>
                    </DialogActions>
                </Dialog>
            }
        </div>
    );
}

export default Popup1;

// const equalComparison = (prevProps, nextProps) =>
//     prevProps.source === nextProps.source;

// export default React.memo(Popup1, equalComparison);
