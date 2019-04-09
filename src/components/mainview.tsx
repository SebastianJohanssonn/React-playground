import React, { CSSProperties } from 'react';
import SectionItem from './sectionItem';
import { View } from './layout';

interface Props {
    onSectionClick: (view:View) => void;
}
/** React function component */
export default function mainView(props:Props) {

    const sectionIds: View[] = ['forest', 'sky', 'desert'];

    return (
        <div style={container}>
            {sectionIds.map((value) => 
            <SectionItem key={value} view={value} onSectionClick = {props.onSectionClick} />)}
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    gridTemplateColumns: '50% 50%',
}