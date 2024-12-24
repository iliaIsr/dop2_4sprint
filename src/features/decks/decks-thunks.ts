import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setLoaderAC } from '../../app/app-reducer.ts'
import axios, { isAxiosError } from 'axios'
import { ErrorMes } from '../../common/utils/handle-error.ts'

// export const fetchDecksTC = () => (dispatch: Dispatch) => {
//   decksAPI.fetchDecks().then((res) => {
//     dispatch(setLoaderAC('loading'))
//     dispatch(setDecksAC(res.data.items))
//     dispatch(setLoaderAC('succeeded'))
//   })
//
// }

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setLoaderAC('loading'))
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setLoaderAC('succeeded'))
  }catch(err) {
    console.log(err)
  }
  }



export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

// export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
//   return decksAPI.updateDeck(params).then((res) => {
//     dispatch(updateDeckAC(res.data))
//   })
// }
export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    // throw new Error("WWW")
    const res =await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch ( error) {
    console.log('error',error)
    ErrorMes(error, dispatch)
  }
}



