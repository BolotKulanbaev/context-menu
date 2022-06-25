import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Add/Add";

import List from "./components/List/List";
import Edit from "./components/Edit/Edit";
import CounterContextProvider from "./contexts/counterContext";
import TodoContextProvider from "./contexts/todoContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <TodoContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CounterContextProvider>
    </TodoContextProvider>
  );
};

export default App;
