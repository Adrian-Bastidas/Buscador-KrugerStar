import { useMemo } from "react";


export default function MarkedItem({ item, onClick, query }) {
  const { left, center, right } = useMemo(
    () => getPositions(item, query),
    [item, query]
  );

  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    const left = item.title.slice(0, index);
    const center = item.title.slice(index, index + query.length);
    const right = item.title.slice(index + query.length);

    return {
      left,
      center,
      right,
    };
  }

  function handleClick(e) {
    onClick(item);
  }

  return (
    <div className="bloque" href="#" onClick={handleClick}>
      {left}
      <label className="seleccionado">{center}</label>
      {right}
    </div>
  );
}
