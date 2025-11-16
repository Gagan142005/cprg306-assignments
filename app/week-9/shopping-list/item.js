export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="border rounded-md p-3 mb-3 cursor-pointer"
      onClick={onSelect}
    >
      <p className="font-medium">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
