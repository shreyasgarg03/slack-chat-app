import React from 'react';
import { Grid } from 'semantic-ui-react';

// css //
import './App.css';
import ColorPanel from './ColorPanel/ColorPanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import SidePanel from './SidePanel/SidePanel';

const App = () => {
  return (
    <div>
      <Grid>
        <ColorPanel />
        <SidePanel />
        <Messages />
        <MetaPanel />
      </Grid>
    </div>
  );
};

export default App;
