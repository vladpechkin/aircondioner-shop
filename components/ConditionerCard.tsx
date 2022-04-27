import { useState } from 'react'
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
    <div className="p-4 gap-4 shadow-xl rounded-lg flex flex-col items-start bg-white" key={conditioner.name}>
      <img width="320" height="100" className="object-cover h-40 mx-auto" src={`/${conditioner.name}.webp`} alt="Изображение кондиционера"/>
      <h3 className="font-medium">{conditioner.name}</h3>
      <label className="flex flex-col gap-2">
        <p>Тип работы кондиционера</p>
        <div className="outline-sky-600 outline-1 outline rounded-lg flex">
          <button
            disabled={!conditioner.onOffVariants}
            className={`
              px-4 py-2 first:rounded-l-lg last:rounded-r-lg 
              ${!conditioner.onOffVariants ? 'text-neutral-600 bg-neutral-200 opacity-50' : !isInverter ? 'bg-sky-600 text-white' : 'text-sky-600'}
            `} 
            onClick={() => handleSetInverter(false)}>
            On/Off
          </button>
          <button className={`px-4 py-2 first:rounded-l-lg last:rounded-r-lg ${isInverter ? 'bg-sky-600 text-white' : 'text-sky-600'} ${!conditioner.inverterVariants && 'text-neutral-600 bg-neutral-200 opacity-50'}`} onClick={() => handleSetInverter(true)}>
            Инверторный
          </button>
        </div>
      </label>
      <label className="flex flex-col gap-2">
        <p>Площадь помещения</p>
        <div className=" outline-sky-600 outline-1 outline rounded-lg">
          {getVariants()?.map(variant => (
            <button className={`px-4 py-2 first:rounded-l-lg last:rounded-r-lg ${selectedVariant.area === variant.area ? 'bg-sky-600 text-white' : 'text-sky-600'}`} onClick={() => selectVariant(variant)} key={variant.id}>
              {variant.area}м²
            </button>
          ))}
        </div>
      </label>
      <p className="text-2xl font-medium">{selectedVariant.price}₽</p>
      <div className="mt-auto w-full">
        <a className="bg-sky-600 text-white rounded-lg px-4 py-2 text-center block" href="tel:89785889023">Заказать</a>
      </div>
    </div>
  )
}