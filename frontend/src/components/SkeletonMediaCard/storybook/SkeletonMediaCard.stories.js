import React from 'react';
import SkeletonMediaCard from "../index";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import mdx from './SkeletonMediaCard.mdx';

export default {
    title: 'components|basic/SkeletonMediaCard', // 스토리북에서 보여질 그룹과 경로를 명시
    component: SkeletonMediaCard, // 어떤 컴포넌트를 문서화 할지 명시
    decorators: [withKnobs], // 애드온 적용
    parameters: {
        componentSubtitle: 'SkeletonMediaCard라고 보여주는 컴포넌트',
        docs: {
            page: mdx
        }
    }
};

export const storybook = () => {
    // knobs 만들기
    return (
        <SkeletonMediaCard />
    );
};
storybook.story = {
    name: 'Default'
};

export const standard = () => (
    <SkeletonMediaCard />
);