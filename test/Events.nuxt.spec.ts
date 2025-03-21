import { mount } from '@vue/test-utils'
import { describe, it, expect, vitest } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useEventsStore } from '@/stores/Events'
import Events from '../pages/Events.vue'

describe('Events.vue', () => {
  it('ensures the Events page is rendered containing key sections', () => {
    const wrapper = mount(Events, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
            initialState: {
              events: {
                events: []
              }
            },
            stubActions: false
          })
        ]
      }
    })

    expect(wrapper.find('.events').exists()).to.equal(true)

    const store = useEventsStore()

    store.events = []
    store.$patch({ events: [] })

    store.fetchEvents().then(() => {
      expect(store.fetchEvents).toHaveBeenCalledTimes(1)
      expect(store.fetchEvents).toHaveBeenLastCalledWith()
      expect(store.events).to.have.lengthOf(6)

      expect(wrapper.findAll('.event-item')).to.have.lengthOf(6)
      expect(wrapper.findAll('.event-title')).to.have.lengthOf(6)
      expect(wrapper.findAll('.event-date')).to.have.lengthOf(6)
      expect(wrapper.findAll('.event-location')).to.have.lengthOf(6)
      expect(wrapper.findAll('.event-content')).to.have.lengthOf(6)
      expect(wrapper.findAll('.event-url')).to.have.lengthOf(6)
      expect(wrapper.findAll('.event-item > a')).to.have.lengthOf(6)
    })
  })
})
