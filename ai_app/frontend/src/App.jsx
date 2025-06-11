import { useState } from 'react'
import {ClerkProivderWithRoutes} from './auth/ClerkProviderWithRoutes.jsx'
import {Routes, Route} from 'react-router-dom'
import {layout} from './layout/layout.jsx'
import { ChallengeGeneratr } from './challenge/ChallengeGeneratr.jsx'
import { HistoryPanel } from './history/HistoryPanel.jsx'
import { AuthenticationPage } from './auth/AuthenticationPage.jsx'

import './App.css'

function App() {
  return <ClerkProivderWithRoutes>
      <Routes>
        
      </Routes>
    </ClerkProivderWithRoutes>
}

export default App
