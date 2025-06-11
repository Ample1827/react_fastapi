import ClerkProivderWithRoutes from './auth/ClerkProviderWithRoutes.jsx'
import {Routes, Route} from 'react-router-dom'
import { Layout } from './layout/Layout.jsx'
import { ChallengeGeneratr } from './challenge/ChallengeGeneratr.jsx'
import { HistoryPanel } from './history/HistoryPanel.jsx'
import { AuthenticationPage } from './auth/AuthenticationPage.jsx'

import './App.css'

function App() {
  return <ClerkProivderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />} />
        <Route path="/sign-up" element={<AuthenticationPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<ChallengeGeneratr />} />
          <Route path="/history" element={<HistoryPanel />} />
        </Route>
      </Routes>
    </ClerkProivderWithRoutes>
}

export default App
