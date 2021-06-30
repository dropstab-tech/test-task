import React from "react";
import {render} from "react-dom";

import App from '@components/app/App';

render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(`root`),
);
