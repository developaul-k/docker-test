import { selector } from 'recoil';
import { textState } from './Atom';

export const replaceTextState = selector({
  key: 'replaceTextState',
  get: ({ get }) => {
    const text = get(textState);
    return text ? `😜 바보 ${text}` : '';
  },
});
