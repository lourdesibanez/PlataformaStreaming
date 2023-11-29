import { Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Container, ThemeProvider } from 'react-bootstrap';
import Home from './components/Home/Home';
import DocList from './components/Home/DocList';
import Login from './components/Login/Login';
import Stream from './components/Catalogo/Stream';

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <Header />
      <Container fluid className='px-0'>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >
          <Routes>
            <Route path='/'
              element={<Home />}
            />
            <Route path='/recomendados'
              element={<DocList />}
            />
            <Route path='/login'
              element={<Login />}
            />
            <Route path='/verdoc'
              element={<Stream />}
            />
          </Routes>
          {/* <Home /> 
          <Catalog /> */}
        </ThemeProvider>
      </Container>
    </>
  )
}

export default App
