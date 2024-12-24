export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET-LOADER':
      return { ...state, status: action.status }
    case 'ERROR':
    return {...state,error: action.errorMessage}
    default:
      return state
  }
}

type ActionsType = SetLoaderAT|ShowErrorMessageAT

export const setLoaderAC=(status:RequestStatusType)=>{
  return {type: 'SET-LOADER', status } as const
}
export const setAppErrorAC=(errorMessage:string|null)=>{
  return {type:'ERROR',errorMessage} as const
}
type SetLoaderAT=ReturnType<typeof setLoaderAC>
type ShowErrorMessageAT=ReturnType<typeof setAppErrorAC>