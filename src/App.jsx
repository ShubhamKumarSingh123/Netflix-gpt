import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './redux/appStore'
import "./App.css"

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  )
}

export default App
