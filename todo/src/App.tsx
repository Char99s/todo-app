import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import { ComponentTree } from './components/ComponentTree.tsx'

function App() {
	//Styling for App
	const styles = {
		app: 'min-w-screen min-h-screen flex items-center justify-center',
	}

  return (
	<div className={styles.app}>
	{/* specify the localhost port on which our Frappe app is running */}
	  <FrappeProvider SocketPort={import.meta.env.VITE_SOCKET_PORT ?? ''}>
		<ComponentTree />
	  </FrappeProvider>

	</div>
  )
}

export default App
