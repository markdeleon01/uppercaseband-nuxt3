import * as members from '@/store/modules/members'
import * as discography from '@/store/modules/discography'
import * as events from '@/store/modules/events'

// the one single source of truth
export default {
  modules: {
    members,
    discography,
    events
  }
}
