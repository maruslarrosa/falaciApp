import './App.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ButtonContainer } from './components/ButtonContainer'

function App() {

  return (
    <Provider store={store}>
     <ButtonContainer />
    </Provider>
  )
}

export default App
