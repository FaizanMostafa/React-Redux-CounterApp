export const INC_COUNTER = "INCREMENT_COUNTER"
export const DEC_COUNTER = "DECREMENT_COUNTER"
export const RESET_COUNTER = "RESET_COUNTER"

export function incCounter(){
  return {
    type: INC_COUNTER,
  }
}

export function decCounter(){
  return {
    type: DEC_COUNTER,
  }
}

export function resetCounter(){
  return {
    type: RESET_COUNTER,
  }
}