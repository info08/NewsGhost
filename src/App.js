import React, { Component } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import News from "./components/News";
import NotFound from "./components/NotFound";

export default class App extends Component {
  render() {
    const pageSize=12;
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<News pageSize={pageSize} country={"in"} category="general" key="general"/>}/>
            <Route exact path="/technology" element={<News pageSize={pageSize} country={"in"} category="technology" key="technology" />}/>
            <Route exact path="/sports" element={<News pageSize={pageSize} country={"in"} category="sports" key="sports"/>}/>
            <Route exact path="/science" element={<News pageSize={pageSize} country={"in"} category="science" key="science" />}/>
            <Route exact path="/health" element={<News pageSize={pageSize} country={"in"} category="health" key="health"/>}/>
            <Route exact path="/business" element={<News pageSize={pageSize} country={"in"} category="business" key="business" />}/>
            <Route exact path="/entertainment" element={<News pageSize={pageSize} country={"in"} category="entertainment" key="entertainment" />}/>
            <Route exact path="*" element={<NotFound pageSize={pageSize} />}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

// news api for interagation api
// ac66b504102a461b94f6288f6e8ad124
