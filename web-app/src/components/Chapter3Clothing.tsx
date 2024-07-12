import { FC } from 'react'

import useStore from '../hooks/useStore'

import Chapter3Avatar, { dictionary } from './Chapter3Avatar'


const Chapter3Clothing: FC = () => {
  const { chapter3 } = useStore()
  const items = Object.entries(chapter3.items)
    .map(([name, enabled]) => ({
      name,
      enabled,
      ...dictionary[name]
    }))

  const { setChapter3 } = useStore()
  const setItemEnabled = (itemName: string, itemEnabled: boolean) => setChapter3({
    ...chapter3,
    items: {
      ...chapter3.items,
      [itemName]: itemEnabled
    }
  })

  return (
    <div className='Chapter3Clothing'>
      {items.map(item =>
        <div
          onClick={() => setItemEnabled(item.name, !item.enabled)}
          className={`Item ${item.enabled && 'Item--enabled'}`}
        >
          {item.alt}
        </div>
      )}

      <Chapter3Avatar containerClassName='Chapter3Clothing__Avatar__container'/>
    </div>
  )
}


export default Chapter3Clothing
