import { create } from 'zustand'
import { WebAppAuthObject } from '../utils/auth'


export type StateType = {
  user: null | WebAppAuthObject
  setUser: (user: WebAppAuthObject) => void

  chapter1: Chapter1Type
  setChapter1: (value: Chapter1Type) => void

  chapter3: Chapter3Type
  setChapter3: (value: Chapter3Type) => void
}

type Chapter1Type = {
  items: {
    belt: boolean
    book: boolean
    book2: boolean
    bread: boolean
    brush: boolean
    comb: boolean
    mechnikov: boolean
    paint: boolean
    piramidon: boolean
    razor: boolean
    receipt: boolean
    scissors: boolean
    shirt: boolean
    socks: boolean
  }
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

  chapter1: {
    items: {
      belt: false,
      book: false,
      book2: false,
      bread: false,
      brush: false,
      comb: false,
      mechnikov: false,
      paint: false,
      piramidon: false,
      razor: false,
      receipt: false,
      scissors: false,
      shirt: false,
      socks: false,
    }
  },
  setChapter1: (value: Chapter1Type) => set({ chapter1: value }),
  
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
