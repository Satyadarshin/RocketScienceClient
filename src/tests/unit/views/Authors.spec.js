/*
 * Authors view unit test with Jest.
 */
import faker from 'faker';
import Vue from 'vue';
import { shallowMount } from '@vue/test-utils'
import AuthorsView from '@/views/Authors.vue';

/**
 * As we only wish to test our Authors Component, we can 'mock' our dependencies.
 * This essentially means creating a fake version of the dependency, which we are able to specify the behaviour of.
 */
const mockAuthors = [faker.random.word()];
jest.mock('@/services/sf-api-service.js', () => ({ fetchGenreCollection: jest.fn(x => Promise.resolve(mockAuthors)) }));

describe('Authors view', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AuthorsView, {
      // Props to pass in for this test
      propsData: {
        spotlightOn: '',
      },
      // Stubs allows us to test this component without having to worry about its child components.
      stubs: ['router-view', 'app-author-table'],
    })
  });

  it('Compares with a snapshot', ()=> {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should fetch the authors collection', async () => {
    // In some async scenarios, `nextTick` is necessary in order for view to carry out its internal updates.
    await Vue.nextTick();
    expect(wrapper.vm.authors).toEqual(mockAuthors);
  });
});
