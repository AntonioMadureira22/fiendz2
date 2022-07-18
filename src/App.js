import React from "react";

import {Route, Routes} from "react-router-dom";

//Routes pages
import Main from "./routes/Main"
import Inside from "./routes/Inside"
import Team from "./routes/Team";
import Traits from "./routes/Traits"
import Nip from "./routes/Nip"
import Merch from "./routes/Merch"
import RoadMap from "./routes/RoadMap"


function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Inside' element={<Inside/>} />
      <Route path='/Team' element={<Team />} />
      <Route path='/Traits' element={<Traits />} />
      <Route path='/Nip' element={<Nip />} />
      <Route path='/Merch' element={<Merch />} />
      <Route path='/RoadMap' element={<RoadMap />} />
     </Routes>
    </div>
  );
}

export default App;
