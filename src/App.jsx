import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteShell from './layouts/SiteShell.jsx'
import { routes } from './routes.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteShell />}>
          {routes.map(({ path, index, element }) => (
            <Route key={path ?? 'index'} path={path} index={index} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
