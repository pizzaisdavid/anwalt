
export async function getRecent () {
  const response = await fetch('https://gorest.co.in/public/v2/posts?access-token=ccd5542dd04d4b23c7a5bb5ed068901db508198a7dc83d1b7a1f03f2e6e0eae8')
  if (!response.ok) {
    throw new Error()
  }
  const result = await response.json()
  return result.slice(0, 3)
}