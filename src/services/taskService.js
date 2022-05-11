
export async function getAll (id) {
  if (id === null) {
    throw new Error('no id given')
  }

  if (Number.isFinite(Number(id)) === false) {
    throw new Error('id was not a number')
  }

  const response = await fetch(`https://gorest.co.in/public/v2/users/${id}/todos?access-token=ccd5542dd04d4b23c7a5bb5ed068901db508198a7dc83d1b7a1f03f2e6e0eae8`)
  if (!response.ok) {
    throw new Error()
  }
  return await response.json()
}