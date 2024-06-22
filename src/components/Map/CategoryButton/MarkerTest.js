import React from 'react';
import MARKER from '../../../assets/images/blackbag.png';

const CategoryMarker = ({ src, style }) => <img src={src} style={style} />;

const MarkerTest = () => {
    return (
        <div>
            <CategoryMarker
                src={MARKER}
                style={{
                    left: 180, // x
                    top: 550, // y
                    position: 'absolute',
                }}
            />
        </div>
    );
};

export default MarkerTest;
