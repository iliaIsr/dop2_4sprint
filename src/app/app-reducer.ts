export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET-LOADER':
      return {...state,status:action.status}
    default:
      return state
  }
}

type ActionsType = SetLoaderAT

export const setLoaderAC=(status:RequestStatusType)=>{
  return {type: 'SET-LOADER', status } as const
}

type SetLoaderAT=ReturnType<typeof setLoaderAC>