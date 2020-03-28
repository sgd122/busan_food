import React, { useEffect } from 'react';
import ImgMediaCard from "../../components/ImgMediaCard";
import SkeletonMediaCard from "../../components/SkeletonMediaCard";
import Button from '@material-ui/core/Button';
import apiSearch from "./api/apiSearch";
import styles from "./styles.module.scss";
import Popup1 from "./Modal/Popup1";
//* redux(Start)
import * as actions from '../../reducers/Foods/useActions';
import { useSelector, useDispatch, connect } from 'react-redux';
//* redux(End)
/**
 * 오늘의 메뉴! 라고 보여주고 싶을 땐 `Food` 컴포넌트를 사용하세요.
 *
 */
const Food = () => {
    const dispatch = useDispatch();
    const cardList = useSelector(store => store.foods.cardList);
    const [state, setState] = React.useState([]);
    const params = {};

    const CardElements = ({ data }) => {

        if (data && data.length > 0) {
            return (
                data.map((item) => {
                    return (
                        <ImgMediaCard
                            id={item.id}
                            Title={item.title}
                            Content={item.content}
                            Images={item.images}
                        />
                    )
                })
            )
        } else {
            return <SkeletonMediaCard />
        }
    }

    useEffect(() => {
        apiSearch(params)
            .then(newState => {
                setState(prev => ({ ...prev, ...newState }));
            });
    }, []);

    useEffect(() => {
        dispatch(actions.setCardList(state.data));
    }, [state.data]);

    const handleClick = () => {
        const min = 1;
        const max = cardList.length;
        const value = Math.round(min + (Math.random() * (max - min)));
        dispatch(actions.setRand(value));
        dispatch(actions.setOpen(true));
    }

    return (
        <>
            <Button variant="contained" color="primary" disableElevation onClick={handleClick} style={{ marginBottom: 10 }}>
                음식선택
            </Button>
            <div className={styles.container}>
                <CardElements
                    data={cardList}
                />
            </div>

            {/* Popup */}
            <Popup1 />
        </>
    );
};

export default Food;