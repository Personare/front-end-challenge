import React from 'react';
const rrd = require('react-router-dom');

rrd.BrowserRouter = ({children}) => <div>{children}</div>
module.exports = rrd;
