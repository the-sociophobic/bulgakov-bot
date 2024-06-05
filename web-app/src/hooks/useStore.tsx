import { create } from 'zustand'
import { UserType } from '../models'


export type StateType = {
  user: null | UserType
  setUser: (user: UserType) => void
}


const useStore = create<StateType>(set => ({
  user: null,
  setUser: (user: UserType) => set({ user: user }),
}))


export default useStore
