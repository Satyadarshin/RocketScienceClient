/*
 * Authors view unit test with Jest.
 */
import faker from 'faker';
import Vue from 'vue';
import { mount } from '@vue/test-utils'
import MasterworksView from '@/views/Masterworks.vue';

describe('Masterworks view', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(MasterworksView, {
      // Props to pass in for this test
      propsData: {},
      // Stubs allows us to test this component without having to worry about its child components.
      stubs: [],
    })
  });

  it('Snapshot', ()=> {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should display main heading', () => {
    // For every unit test there will be an expected result,
    // based on how we expect the code to behave if it is working correctly.
    const expected = 'Masterworks';
    // An actual result which we get from running the code.
    const actual = wrapper.find('h2').text();
    // We then compare the two to check if the code behaves as expected.
    expect(actual).toEqual(expected);
  });

});
