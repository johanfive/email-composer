import React from 'react';
import {connect} from 'react-redux';
// import selector for "hydrating" props in mapStateToProps
import {getAllLabels} from '../reducers';

import Email        from './Email';
import Container    from './Container';
import AddContainer from './AddContainer';


const Home = (props) => {
  let listContainers = props.labels.map(
    label => <Container key={label.id} label={label} />
  );
  return (
    <div>
      <Email />
      <div className="clickBoard">
        {listContainers}
        <AddContainer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    labels: getAllLabels(state)
  }
};

export default connect(mapStateToProps)(Home);
