import React from 'react';
import Food from "./index";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import mdx from './Food.mdx';

export default {
    title: 'components|basic/Food', // 스토리북에서 보여질 그룹과 경로를 명시
    component: Food, // 어떤 컴포넌트를 문서화 할지 명시
    decorators: [withKnobs], // 애드온 적용
    parameters: {
        componentSubtitle: '"음식"라고 보여주는 컴포넌트',
        docs: {
            page: mdx
        }
    }
};

export const food = () => {
    // knobs 만들기
    const big = boolean('big', false);
    const name = text('name', 'Storybook');
    return (
        <Food
            name={name}
            big={big}
            onHello={action('onFood')}
            onBye={action('onFood')}
        />
    );
};
food.story = {
    name: 'Default'
};

export const standard = () => <Food name="Storybook" />;
export const big = () => <Food name="Storybook" big />;