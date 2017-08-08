import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

export const mountConnected = (component, store) => {
    return mount(
        <Provider store={store}>
            {component}
         </Provider>
    );
};
