import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NotFound from '../pages/NotFound.vue'

describe('NotFound.vue', () => {
  it('ensures the NotFound page is rendered containing key sections', () => {
    const section = 'section'
    const wrapper = shallowMount(NotFound, {
        data () {
          return {
            resource: section
          }
        },
        stubs: { NuxtLink: RouterLinkStub }
      })

    expect(wrapper.find('.not-found').exists()).to.equal(true)
    expect(wrapper.find('h1').exists()).to.equal(true)
    expect(wrapper.find('h3').exists()).to.equal(true)
    console.log(wrapper.find('h3').text())
    expect(wrapper.find('h3').text()).toContain(section)
    expect(wrapper.find('.back').exists()).to.equal(true)
  })

  it('ensures the NotFound page is rendered with default h3 text when no resource prop is provided', () => {
    const resource = 'resource'
    const wrapper = shallowMount(NotFound, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.find('.not-found').exists()).to.equal(true)
    expect(wrapper.find('h1').exists()).to.equal(true)
    expect(wrapper.find('h3').exists()).to.equal(true)
    console.log(wrapper.find('h3').text())
    expect(wrapper.find('h3').text()).toContain(resource)
    expect(wrapper.find('.back').exists()).to.equal(true)
  })
})
