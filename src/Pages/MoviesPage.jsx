import { useNavigate } from "react-router-dom";

export default function MoviesPage() {
  const data = [
    {
      description: "Lord of the rings",
      id: 0,
    },
    {
      description: "Harry Potter",
      id: 1,
    },
    {
      description: "God father",
      id: 2,
    },
    {
      description: "Sweet november",
      id: 3,
    },
  ];
  const navigate = useNavigate()
  return (
    <ul>
      {data.map((item) => {
        return (
          <li style={{ cursor: "pointer", marginLeft: "40px" }} key={item.id} onClick={() => navigate(`${item.description}`)}>
            {item.description}
          </li>
        )
      })}
    </ul>
  );
}
