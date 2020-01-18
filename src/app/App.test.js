import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Test', () => {
  it('Should have an app with id=app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#app')).toHaveLength(1);
  });
});
