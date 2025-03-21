import { mount } from '@vue/test-utils'
import { describe, it, expect, vitest } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useDiscographyStore } from '@/stores/Discography'
import Discography from '../pages/Discography.vue'

describe('Discography.vue', () => {
	it('ensures the Discography page is rendered containing key sections', () => {
		const wrapper = mount(Discography, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: vitest.fn,
						initialState: {
							discography: {
								releases: []
							}
						},
						stubActions: false
					})
				]
			}
		})

		expect(wrapper.find('.discography').exists()).to.equal(true)

		const store = useDiscographyStore()

		store.releases = []
		store.$patch({ releases: [] })

		expect(wrapper.findAll('.release-item')).to.have.lengthOf(0)

		store.fetchReleases().then(() => {
			expect(store.fetchReleases).toHaveBeenCalledTimes(1)
			expect(store.fetchReleases).toHaveBeenLastCalledWith()
			expect(store.releases).to.have.lengthOf(6)

			expect(wrapper.findAll('.release-item')).to.have.lengthOf(6)
			expect(wrapper.findAll('.release-thumbnail')).to.have.lengthOf(6)
			expect(wrapper.findAll('.release-title')).to.have.lengthOf(6)
			expect(wrapper.findAll('.release-date')).to.have.lengthOf(6)
			expect(wrapper.findAll('.release-url')).to.have.lengthOf(6)
		})
	})
})
