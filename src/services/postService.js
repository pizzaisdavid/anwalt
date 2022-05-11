
export async function getRecent () {
  const response = await fetch('https://gorest.co.in/public/v2/posts')
  if (!response.ok) {
    throw new Error()
  }
  return await response.json()
}