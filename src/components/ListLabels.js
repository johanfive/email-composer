// import dependencies
import React from 'react';
// import child Component
import Label from './Label';
/*************************************/


const ListLabels = ({labelIds}) => {
    const listLabels = labelIds.map(
        labelId => <Label key={labelId} labelId={labelId} />
    );
    return (
        <div>
            {listLabels}
        </div>
    );
};

export default ListLabels;
