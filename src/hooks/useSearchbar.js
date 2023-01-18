//react
import { useState } from "react";

export default function useSearchbar({ closeBackdrop, openBackdrop }) {
  const [searchbarOpen, setSearchbarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenSearchbar = () => {
    setSearchbarOpen(true);
    openBackdrop();
  };

  const handleCloseSearchbar = () => {
    setSearchbarOpen(false);

    setSearchTerm("");
    closeBackdrop();
  };

  return {
    searchTerm,
    searchbarOpen,
    setSearchTerm,
    handleOpenSearchbar,
    handleCloseSearchbar,
  };
}
