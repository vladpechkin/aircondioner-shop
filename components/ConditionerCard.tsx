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
    <div className="p-2 w-80 shadow-lg rounded-lg m-2 flex flex-col" key={conditioner.name}>
      <Image width="320" height="160" className="object-cover" src={`/${conditioner.name}.webp`} />
      <h3 className="m-2 font-medium">{conditioner.name}</h3>
      <label className="p-2 block">Тип работы кондиционера
        <div className="mt-2 bg-neutral-200 rounded-lg inline-flex">
          <button className={!isInverter ? 'bg-blue-600 p-2 rounded-lg text-white' : 'p-2'} onClick={() => handleSetInverter(false)}>
            On/Off
          </button>
          <button className={isInverter ? 'bg-blue-600 p-2 rounded-lg text-white' : 'p-2'} onClick={() => handleSetInverter(true)}>
            Инверторный
          </button>
        </div>
      </label>
      <label className="p-2 block">Площадь помещения
        <div className="mt-2 bg-neutral-200 rounded-lg inline-flex">
          {getVariants()?.map(variant => (
            <div>
              <button className={selectedVariant.area === variant.area ? 'bg-blue-600 p-2 rounded-lg text-white' : 'p-2'} onClick={() => selectVariant(variant)}>
                {variant.area}м²
              </button>
            </div>
          ))}
        </div>
      </label>
      <p className="m-2 text-2xl font-medium">{selectedVariant.price}₽</p>
      <div className="mt-auto">
        <a className="bg-blue-600 text-white rounded-lg px-4 py-2 m-2 text-center block" href="">Заказать</a>
      </div>
    </div>
  )
}