import React from 'react';
import { createNewLabel } from './firebaseActions';
import Button from './styledWrapper';
//______________________________________________________________________________



const NewLabelButton = () => <Button onClick={createNewLabel}></Button>;

export default NewLabelButton;
