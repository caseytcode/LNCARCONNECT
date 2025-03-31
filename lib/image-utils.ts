/**
 * Utility function to preload images
 * @param src Image source URL
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
  })
}

/**
 * Utility function to get placeholder image URL
 * @param width Width of the placeholder
 * @param height Height of the placeholder
 * @param text Text to display on the placeholder
 * @returns Placeholder image URL
 */
export const getPlaceholderImage = (width: number, height: number, text: string): string => {
  return `/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(text)}`
}

/**
 * Utility function to get image dimensions
 * @param src Image source URL
 * @returns Promise with image dimensions
 */
export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve({ width: img.width, height: img.height })
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
  })
}

/**
 * Utility function to check if an image exists
 * @param src Image source URL
 * @returns Promise that resolves to boolean indicating if image exists
 */
export const imageExists = async (src: string): Promise<boolean> => {
  try {
    await preloadImage(src)
    return true
  } catch (error) {
    return false
  }
}

