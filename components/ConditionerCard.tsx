import { useState } from 'react'
import Image from 'next/image'
import { Conditioner } from '../types'
import { FC } from 'react'

interface Props {
  conditioner: Conditioner
}

export const ConditionerCard: FC<Props> = ({ conditioner: conditioner }) => {
  const [isInverter, setInverter] = useState(!conditioner.onOffVariants ? true : false)

  const getVariants = () => {
    if (isInverter && conditioner.inverterVariants) {
      return conditioner.inverterVariants
    } else if (!isInverter && conditioner.onOffVariants) {
      return conditioner.onOffVariants
    }
  }

  const [selectedVariant, selectVariant] = useState(getVariants()![0])

  const handleSetInverter = (value: boolean) => {
    setInverter(value)
    selectVariant(value ? conditioner.inverterVariants![0] : conditioner.onOffVariants![0])
  }

  return (
    <div className="p-2 shadow-lg rounded-lg flex flex-col items-start bg-white" key={conditioner.name}>
      <Image width="320" height="160" className="object-cover" src={`/${conditioner.name}.webp`} />
      <h3 className="m-2 font-medium">{conditioner.name}</h3>
      <label className="p-2">
        <p>Тип работы кондиционера</p>
        <div className="mt-2 outline-blue-600 outline-1 outline rounded-lg flex">
          <button
            disabled={!conditioner.onOffVariants}
            className={`
              px-4 py-2 first:rounded-l-lg last:rounded-r-lg 
              ${!conditioner.onOffVariants ? 'text-neutral-500 bg-neutral-200 opacity-50' : !isInverter ? 'bg-blue-600 text-white' : 'text-blue-600'}
            `} 
            onClick={() => handleSetInverter(false)}>
            On/Off
          </button>
          <button className={`px-4 py-2 first:rounded-l-lg last:rounded-r-lg ${isInverter ? 'bg-blue-600 text-white' : 'text-blue-600'} ${!conditioner.inverterVariants && 'text-neutral-500 bg-neutral-200 opacity-50'}`} onClick={() => handleSetInverter(true)}>
            Инверторный
          </button>
        </div>
      </label>
      <label className="p-2">
        <p>Площадь помещения</p>
        <div className="mt-2 outline-blue-600 outline-1 outline rounded-lg">
          {getVariants()?.map(variant => (
            <button className={`px-4 py-2 first:rounded-l-lg last:rounded-r-lg ${selectedVariant.area === variant.area ? 'bg-blue-600 text-white' : 'text-blue-600'}`} onClick={() => selectVariant(variant)} key={variant.id}>
              {variant.area}м²
            </button>
          ))}
        </div>
      </label>
      <p className="m-2 text-2xl font-medium">{selectedVariant.price}₽</p>
      <div className="mt-auto w-full">
        <a className="bg-blue-600 text-white rounded-lg px-4 py-2 m-2 text-center block" href="tel:89785889023">Заказать</a>
      </div>
    </div>
  )
}