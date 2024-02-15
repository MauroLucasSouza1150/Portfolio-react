import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Projetos from './pages/Projetos.jsx'
import Contatos from './pages/Contatos.jsx'
import Page404 from "./pages/Page404.jsx"
import PageBase from "./pages/PageBase.jsx"

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <PageBase /> }>
                <Route index element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/projetos" element={ <Projetos /> }></Route>
                <Route path="/contatos" element={ <Contatos /> }></Route>
                <Route path="*" element={ <Page404 /> }></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes