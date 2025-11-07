import Entry from './components/entry.jsx'
import data from './components/data.js'
import Header from './components/header.jsx'

export default function App() {
  const allElements = data.map((entry) => (
    <Entry
      key={entry.id}
      {...entry}
    />
  ))

  return (
    <>
      <Header />
      <div className='container'> 
        {allElements}
      </div>
    </>
  )
}
