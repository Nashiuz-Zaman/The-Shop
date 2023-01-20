//custom hooks
import useDocumentTitle from "../../hooks/useDocumentTitle";

//styles
import "./Sale.css";

export default function Sale() {
  useDocumentTitle(
    "Clothing, Shoes and Accessories Sale: Up To 60% Off | The Shop International"
  );

  return <div>Sale</div>;
}
