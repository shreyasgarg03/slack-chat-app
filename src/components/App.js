import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';

// css //
import './App.css';
import ColorPanel from './ColorPanel/ColorPanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import SidePanel from './SidePanel/SidePanel';

const App = () => {
  return (
    <div>
      <Grid columns='equal' className='app' style={{ backgroundColor: '#eee' }}>
        <ColorPanel />
        <SidePanel />
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

export default App;
