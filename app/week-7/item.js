export default function Item ({ name, quantity, category}){
  return (
    <li className="border rounded-md p-3 mb-3">
      <p className="font-medium">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>)
}