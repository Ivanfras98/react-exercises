import { useMemo } from "react";

export function FilteredList() {
  const list = [
    { name: "Ivan", id: "01", age: 24 },
    { name: "Ciccio", id: "02", age: 18 },
    { name: "Pippo", id: "03", age: 28 },
  ];
  const filter = useMemo(() => list.filter((person) => person.age >= 18), []);
  return (
    <ul>
      {filter.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}
