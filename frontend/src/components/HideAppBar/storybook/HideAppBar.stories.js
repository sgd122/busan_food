import React from 'react';
import HideAppBar from "../index";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import mdx from './HideAppBar.mdx';

export default {
    title: 'components|basic/HideAppBar', // 스토리북에서 보여질 그룹과 경로를 명시
    component: HideAppBar, // 어떤 컴포넌트를 문서화 할지 명시
    decorators: [withKnobs], // 애드온 적용
    parameters: {
        componentSubtitle: 'Header 보여주는 컴포넌트',
        docs: {
            page: mdx
        }
    }
};

export const storybook = () => {
    // knobs 만들기
    const title = text('title', "Title");
    return (
        <HideAppBar
            Title={title}
        />
    );
};
storybook.story = {
    name: 'Default'
};

export const standard = () => (
    <HideAppBar
        Title="Storybook" />
);