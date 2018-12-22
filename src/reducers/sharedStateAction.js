export default (type, initialState) => (
  (state = initialState, action) => {
    switch (action.type) {
      case type:
        return action.payload

      default:
        return state
    }
  }
)
