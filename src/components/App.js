import React from 'react';
import { connect } from 'react-redux';
import { Grid, GridColumn } from 'semantic-ui-react';
import './App.css';

// css //
import ColorPanel from './ColorPanel/ColorPanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import SidePanel from './SidePanel/SidePanel';

const App = ({ currentUser }) => {
  return (
    <div>
      <Grid columns='equal' className='app' style={{ backgroundColor: '#eee' }}>
        <ColorPanel />
        <SidePanel currentUser={currentUser} />
        <GridColumn style={{ marginLeft: 320 }}>
          <Messages />
        </GridColumn>
        <GridColumn width={4}>
          <MetaPanel />
        </GridColumn>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, {})(App);
