import { useState, useCallback, useMemo } from "react";
import Results from "./results";


export default function SearchBar({ items, onItemSelected }) {
  const [query, setQuery] = useState("mi");
  const [results, setResults] = useState([]);

  function handleOnChange(e) {
    const value = e.target.value;
    setQuery(value);
  }

  function handleResults(items) {
    setResults(items);
  }

  return (
    <div className="barra-busqueda">
      {results && <div className="seleccion">{results.length} resultado(s)</div>}
      <input className="barra"
        type={"text"}
        onChange={handleOnChange}
        value={query}
      ></input>

      <Results
        items={items}
        query={query}
        onItemSelected={onItemSelected}
        onResultsCalculated={handleResults}
      />
    </div>
  );
}
