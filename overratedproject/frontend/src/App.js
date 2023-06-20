import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReviewList from './ReviewList';
import LocationList from './LocationList';
import CreateReview from './CreateReview';
import PlayArea from './PlayArea';
import Nav from './Nav';
import ReviewList from './ReviewList'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/reviewlist" element={<ReviewList />} />
          <Route path="/locationlist" element={<LocationList />} />
          <Route path="/createreviewcard" element={<CreateReview />} />
          <Route path="/playarea" element={<PlayArea />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
