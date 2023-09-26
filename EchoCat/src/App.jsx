import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>precione para nuevo </button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`extrage las 3 primeras palabras para este  ${fact}`} />}
    </main>
  )
}
