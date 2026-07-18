import { useParams } from "react-router-dom";

export default function ProductDetails() {

  const { id } = useParams();

  return (
    <div>
      <h2>Product Details</h2>

      <h3>Product ID : {id}</h3>
    </div>
  );
}