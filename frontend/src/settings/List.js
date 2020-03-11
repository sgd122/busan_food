import img01 from '../img/food_img01.jpg';
import img02 from '../img/food_img02.jpg';
import img03 from '../img/food_img03.jpg';


export function Food() {
    const FoodList = [
        { id: 1, title: '강가네손만두', content: '칼국수/만두', images: img01 },
        { id: 2, title: '마봉자김밥', content: '분식(라면/김밥/오므라이스...)', images: img03 },
        { id: 3, title: '맥도날드', content: '햄버거', images: img02 },
        { id: 4, title: '갈비탕', content: '갈비탕', images: img03 },
        { id: 5, title: '유가네닭갈비', content: '볶음밥', images: img03 },
        { id: 6, title: '하늘한우', content: '점심특선(고기/된장찌개)', images: img03 },
        { id: 7, title: '맘스터치', content: '햄버거', images: img02 },
        { id: 8, title: '천운숯불갈비', content: '점심특선(고기/된장찌개)', images: img03 },
        { id: 9, title: '철호국밥', content: '국밥', images: img03 },
        { id: 10, title: '더도이종가집', content: '국밥', images: img03 },
    ];

    return FoodList;
}