import {shallow} from 'enzyme';
import React from 'react';
import ExpenceDashboardPage from '../../components/ExpenceDashboardPage';

test('Should render ExpenceDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenceDashboardPage />);
    expect(wrapper).toMatchSnapshot();
})