export interface ConditionerVariant {
  id: string
  area: number
  price: number
}

export interface Conditioner {
  name: string
  onOffVariants: ConditionerVariant[] | null
  inverterVariants: ConditionerVariant[] | null
}