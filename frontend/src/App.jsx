import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Snippet from "./pages/Snippet";
import AppLayout from "./layouts/AppLayout";

const App = () => (
  <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snippets/:id" element={<Snippet />} />
      </Routes>
    </AppLayout>
  </BrowserRouter>
);

export default App;
