import { Tabs } from 'antd';
import React from 'react';
import {Converter} from "../converter/Converter";
import {Header} from "../header/Header";

const onChange = (key: string) => {
};

const tabsItems = [
    {
        label: `Currency rate against UAH`,
        key: 'currency',
        children: <Header />,
    },
    {
        label: `Currency converter`,
        key: 'converter',
        children: <Converter />,
    },
]

const InstrumentalSwitcher: React.FC = () => (
    <Tabs
        onChange={onChange}
        type="card"
        items={tabsItems.map((item, i) => {
            return item;
        })}
    />
);

export default InstrumentalSwitcher;