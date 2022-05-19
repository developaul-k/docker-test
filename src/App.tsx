import { useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { replaceTextState, textState } from './recoil/text'

function App() {
  const [text, setText] = useRecoilState(textState)
  const replacedText = useRecoilValue(replaceTextState)

  return (
    <div className="App">
      <p>텍스트를 입력 해 보세요 😀</p>
      <p>{replacedText}</p>
      <input
        type="text"
        defaultValue={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
    </div>
  )
}

export default App
