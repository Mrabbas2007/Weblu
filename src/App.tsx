import { lazy, Suspense } from 'react'
import './App.css'

const App = () => {

  const HpmePage = lazy(() => import('./pages/Home'))

  return (
    <>
      <main className='w-full '>
        <Suspense fallback={''} >
          <HpmePage />
        </Suspense>
      </main>
    </>
  )
}

export default App
