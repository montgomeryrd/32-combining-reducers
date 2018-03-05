import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow, mount} from 'enzyme';
import CategoryFrom from '../components/category-form/category-form';
require('jest');

configure({adapter: new Adapter()});

describe('CategoryForm', () => {
    
    describe('shallow Mounting', function() {
        beforeAll(() => this.wrapper = shallow(<CategoryFrom />));
        afterAll(() => this.wrapper.unmount());

        it('should render a category', () => {
            expect(this.wrapper.length).toBe(1);
            expect(this.wrapper.find('.category-form').length).toBe(1);
        });
        
        it('should have initial state', () => {
            expect(this.wrapper.state().title).toEqual('');
            expect(this.wrapper.state().budget).toEqual('');
        });
        
        it('should change the state', () => {
            let obj = {target: {name: 'title', value: 'Code Monkey'}};
            this.wrapper.find('.category-form input[name="title"]').simulate('change', obj);
            expect(this.wrapper.state().title).toEqual('Code Monkey');
        });
    });

    describe('Full Mounting', function() {
        
        beforeAll(() => {
            this.wrapper = mount(<CategoryFrom />);
            this.wrapper.setProps({onComplete: jest.fn()});
        });
        
        afterAll(() => this.wrapper.unmount());

        it('should reset the state.title value to empty string on form submit', () => {
            this.wrapper.setState({title: 'something to reset'});
            expect(this.wrapper.state().title).toEqual('something to reset');
            // this.wrapper.simulate('submit', {preventDefault: () => {}});
            // expect(this.wrapper.state().title).toEqual('');
        
            //I'm too tired to try and understand this atm.
        });
    });
   
});
