import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Calculator } from './components/Calculator';
declare let module: any;


ReactDOM.render(<Calculator equationValue="0" />,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}