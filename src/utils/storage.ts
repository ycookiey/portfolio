export const CATEGORY_STORAGE_KEY_PREFIX = 'portfolio_category_clicked_'
export const PROJECT_STORAGE_KEY_PREFIX = 'portfolio_project_clicked_'

export function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const value = localStorage.getItem(key)
    return value !== null ? JSON.parse(value) : defaultValue
  } catch (error) {
    console.error(`Error getting item from localStorage: ${error}`)
    return defaultValue
  }
}

export function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Error saving item to localStorage: ${error}`)
  }
}

export function removeFromStorage(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing item from localStorage: ${error}`)
  }
}

export function removeItemsByPrefix(prefix: string): void {
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(prefix))
      .forEach((key) => localStorage.removeItem(key))
  } catch (error) {
    console.error(`Error removing items by prefix from localStorage: ${error}`)
  }
}

export function clearCategoryClickedState(categoryId?: string): void {
  if (categoryId) {
    removeFromStorage(`${CATEGORY_STORAGE_KEY_PREFIX}${categoryId}`)
  } else {
    removeItemsByPrefix(CATEGORY_STORAGE_KEY_PREFIX)
  }
}

export function clearProjectClickedState(projectId?: number): void {
  if (projectId !== undefined) {
    removeFromStorage(`${PROJECT_STORAGE_KEY_PREFIX}${projectId}`)
  } else {
    removeItemsByPrefix(PROJECT_STORAGE_KEY_PREFIX)
  }
}

export function clearAllClickedStates(): void {
  clearCategoryClickedState()
  clearProjectClickedState()
}
