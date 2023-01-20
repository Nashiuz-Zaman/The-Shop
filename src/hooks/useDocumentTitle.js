//react
import { useState, useEffect } from "react";

export default function useDocumentTitle(documentTitle) {
  const [title, setTitle] = useState(documentTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return { setTitle };
}
