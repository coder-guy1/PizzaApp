/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { formatCurrency } from "../../utils/helpers";

// eslint-disable-next-line react/prop-types
function MenuItem({ pizza }) {
  // eslint-disable-next-line react/prop-types
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
