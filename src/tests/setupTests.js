import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import "jest-enzyme";
require('dotenv').config({ path: '.env.test'});
Enzyme.configure({
    adapter: new Adapter()
});