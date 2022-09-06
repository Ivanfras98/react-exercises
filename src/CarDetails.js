import React, { useEffect, useRef, useState } from "react";

export function CarDetails({
  initialData = { model: "Golf", year: "2020", color: "blue" },
}) {
  const inputRef = useRef();
  const [inputChange, setStatus] = useState(false);

  useEffect(() => {
    inputRef.current.elements.model.value = initialData.model;
    inputRef.current.elements.year.value = initialData.year;
    inputRef.current.elements.color.value = initialData.color;
  }, [initialData]);

  useEffect(() => {
    if (inputChange === true) {
      inputRef.current.elements.model.value = "";
      inputRef.current.elements.year.value = "";
      inputRef.current.elements.color.value = "";
    }
  }, [inputChange]);

  function handleInputChange() {
    setStatus(true);
  }
  return (
    <form ref={inputRef} onChange={handleInputChange}>
      <h1>Car details</h1>
      <input name="model" />
      <input name="year" />
      <input name="color" />
    </form>
  );
}
