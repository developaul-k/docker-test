import { atom, selector } from 'recoil'

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const replaceTextState = selector({
  key: 'replaceTextState',
  get: ({ get }) => {
    const text = get(textState)
    return text ? `😜 바보 ${text}` : ''
  },
})
