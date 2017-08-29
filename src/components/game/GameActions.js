import { createRequestTypes } from '../../actions/action-types'

export const TAROT = createRequestTypes('TAROT')

export const tarotRequestAction = () => ({
  type: TAROT.REQUEST
})
