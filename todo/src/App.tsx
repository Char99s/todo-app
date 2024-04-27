import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import { TodoWrapper } from './components/TodoWrapper.tsx'

function App() {
	//Styling for App
	const styles = {
		app: 'min-w-screen min-h-screen flex items-center justify-center',
	}

  return (
	<div className={styles.app}>
	{/* specify the localhost port on which our Frappe app is running */}
	  <FrappeProvider SocketPort={import.meta.env.VITE_SOCKET_PORT ?? ''}>
		<TodoWrapper/>
	  </FrappeProvider>

	</div>
  )
}

export default App
