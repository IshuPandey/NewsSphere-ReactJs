import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  // const pageSize = 5;

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <BrowserRouter >

        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}

        />


        <Routes>
          < Route exact path="/" element={<News key="general" setProgress={setProgress} pageSize={10} country="in" category="general" />} />
          < Route exact path="/health" element={<News key="health" setProgress={setProgress} pageSize={10} country="in" category="health" />} />
          < Route exact path="/sports" element={<News key="sports" setProgress={setProgress} pageSize={10} country="in" category="sports" />} />
          < Route exact path="/technology" element={<News key="technology" setProgress={setProgress} pageSize={10} country="in" category="technology" />} />
          < Route exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress} pageSize={10} country="in" category="entertainment" />} />
          < Route exact path="/business" element={<News key="business" pageSize={10} setProgress={setProgress} country="in" category="business" />} />
          < Route exact path="/science" element={<News key="science" pageSize={10} setProgress={setProgress} country="in" category="science" />} />
          < Route exact path="/general" element={<News key="general" pageSize={10} setProgress={setProgress} country="in" category="general" />} />



        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;