import { useParams } from "react-router-dom"

export default function MovieProfilePage() {
  const params = useParams()
  console.log(params)
  return (
    <h1>Hello, the name of the film is {params.moviesName}</h1>
  )
}
