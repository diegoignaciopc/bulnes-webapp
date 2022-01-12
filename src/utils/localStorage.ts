export function loadState<T>(key: string): T | undefined
export function loadState(key: string): any | undefined

export function loadState(key: string) {
  if (typeof window === 'undefined') return

  try {
    const serializedState = localStorage.getItem(key)

    if (serializedState === null) return undefined

    return JSON.parse(serializedState)
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export function saveState(key: string, state: any) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (error) {
    console.error(error)
    return error
  }
}

export function removeState({ items, key }: { items?: string[]; key?: string }) {
  try {
    if (items) items.forEach((item) => localStorage.removeItem(item))
    else if (key) localStorage.removeItem(key)
  } catch (error) {
    console.error(error)
  }
}

export function clearState() {
  try {
    localStorage.clear()
  } catch (error) {
    console.error(error)
  }
}

/* Unfortunately from this project we cannot define this variables (and it should be versioned) */
export const authKeys = {
  accessToken: 'token',
  auth: 'auth',
}
