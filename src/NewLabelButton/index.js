import React from 'react';
import { createNewLabel } from './firebaseActions';
//______________________________________________________________________________


const NewLabelButton = () => <button onClick={createNewLabel}>+</button>;

export default NewLabelButton;
