import { create } from 'zustand'
import { WebAppAuthObject } from '../utils/auth'


export type StateType = {
  user: null | WebAppAuthObject
  setUser: (user: WebAppAuthObject) => void

  chapter3: Chapter3Type
  setChapter3: (value: Chapter3Type) => void
}

type Chapter3Type = {
  items: {
    babochka: boolean
    galstuk: boolean
    hat: boolean
    monocle: boolean
    platok: boolean
  }
}


const useStore = create<StateType>(set => ({
  user: null,
  setUser: (user: WebAppAuthObject) => set({ user: user }),

  chapter3: {
    items: {
      babochka: false,
      galstuk: false,
      hat: false,
      monocle: false,
      platok: false,
    }
  },
  setChapter3: (value: Chapter3Type) => set({ chapter3: value }),
  
}))


export default useStore
