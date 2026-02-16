"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const [placeholder, setPlaceholder] = useState("Cari anime...");
  const [error, setError] = useState(false);

  const handleSearch = (event) => {
    const keyword = searchRef.current.value.trim();

    if (!keyword)
      return
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div className="relative w-full">
      <input
        ref={searchRef}
        placeholder={placeholder}
        onKeyDown={handleSearch}
        className={`w-full p-2 rounded border transition
          ${error ? "border-red-500 placeholder-red-500" : "border-gray-300"}`}
      />

      <button
        className="absolute top-2 right-2"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
