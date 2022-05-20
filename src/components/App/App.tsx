import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../../store/Text/Atom';
import { replaceTextState } from '../../store/Text/Selector';
import './App.css';

function App() {
  const [text, setText] = useRecoilState(textState);
  const replacedText = useRecoilValue(replaceTextState);

  return (
    <div className="App">
      <p>텍스트를 입력 해 보세요 😀</p>
      <p>{replacedText}</p>
      <input
        type="text"
        placeholder="Enter your text!"
        defaultValue={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
    </div>
  );
}

export default App;
