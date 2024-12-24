import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector } from '../store.ts'
import { selectAppError } from '../app-selectors.ts'
import { setAppErrorAC } from '../app-reducer.ts'

export const GlobalError = () => {

  const errorMessage = useAppSelector(selectAppError)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setAppErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
