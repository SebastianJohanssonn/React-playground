import React, { CSSProperties } from 'react';
import SectionItem from './sectionItem';
import { View } from './layout';

/** React function component */
export default function mainView() {
    
    const sectionIds: View[] = ['forest', 'sky', 'desert'];

    return (
        <div style={container}>
            {sectionIds.map((value) => 
            <SectionItem key={value} view={value}/>)}
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    gridTemplateColumns: '50% 50%',
}