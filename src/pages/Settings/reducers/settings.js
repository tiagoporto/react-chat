const initialState = {
  userName: '',
  interfaceColor: 'light',
  clockDisplay: 12,
  sounds: true,
  sendCTRL: false,
  language: 'en'
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: action.value
      }
    default:
      return state
  }
}

export default settings
