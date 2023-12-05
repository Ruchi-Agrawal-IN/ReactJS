import useGeneres from "../hooks/useGenres";
const GenereList = () => {
  const { data } = useGeneres();
  return (
    <ul>
      {data.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default GenereList;
