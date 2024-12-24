import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setAppErrorAC } from '../../app/app-reducer.ts'

export type ServerError={
  errorMessages:Array<{field:string,message:string}>,
}



export function ErrorMes(error:unknown, dispatch:Dispatch) {
  let errorMessages:string
  if (isAxiosError<ServerError>(error)) {
    errorMessages = error.response? error.response.data.errorMessages[0].message: error.message
  }else{
    errorMessages = (error as Error).message
  }
  console.log(errorMessages)
  dispatch(setAppErrorAC(errorMessages))
}