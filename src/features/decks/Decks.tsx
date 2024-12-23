import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import { LinearLoader } from '../../common/components/Loader/LinearLoader.tsx'
import { useSelector } from 'react-redux'



export const Decks = () => {


  return (
    <div>
      <h1>Decks 🐈</h1>
      <AddNewDeckForm />
      <DecksList />
    </div>
  )
}
