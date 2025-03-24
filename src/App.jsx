import { useState } from "react";
import { BrowsersRouter, Routes, Route, Navigate } from "react-router-dom";


function App (){

  return (
    <div className='app'>
      <BrowsersRouter>
      <Routes>
        <Route path="/chat" element={<Chat />} /> 
      </Routes>
      </BrowsersRouter>
    </div>
  );
}

export default App
