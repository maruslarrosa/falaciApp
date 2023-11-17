import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ButtonContainer } from './components/ButtonContainer';
import { Img } from './components/Img';

function App() {
  return (
    <Provider store={store}>
      <div className='main-container'>
        <Img />
        <ButtonContainer />
      </div>
    </Provider>
  )
}

export default App
