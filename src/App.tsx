import {ThemeProvider} from 'styled-components'
import {theme, GlobalStyles} from '../src/shared/styles/theme'
import Routes from './shared/components/routes/Routes'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
      <Toaster
        toastOptions={{
          success: {
            border: '1px solid #A230ED',
            padding: '16px',
            color: '#A230ED',
          },
        }}
      />
    </ThemeProvider>
  )
}

export default App
