import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import NoMatch from './components/NoMatch';
import AboutUs from './components/Home';
import Home from './components/Home';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
