import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
export default function EventsPagination({
  totalPages,
  setPagination,
  page,
  setPage,
}) {
  const limit = 5;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleCurrentPage = (item, e) => {
    setPage(item);
    // setPagination(`page=${page}&limit=${limit}`);

    // console.log(item);
  };
  const handlePrevious = () => {
    setPage(page - 1);
    // setPagination(`page=${page}&limit=${limit}`);
  };
  const handleNext = () => {
    setPage(page + 1);
    // setPagination(`page=${page}&limit=${limit}`);
  };
  return (
    <footer className="flex space-x-5">
      <button
        disabled={page === 1}
        onClick={handlePrevious}
        className="px-3 py-2 rounded bg-[#315a49c4] text-white hover:scale-110 cursor-pointer"
      >
        Previous
      </button>
      <div className="flex space-x-3">
        {pages.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={(e) => handleCurrentPage(item, e)}
                className="px-4 py-2 rounded bg-[#315a49c4] text-white hover:scale-110 cursor-pointer"
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
      <button
        disabled={page === totalPages}
        onClick={handleNext}
        className="px-3 py-2 rounded bg-[#315a49c4] text-white hover:scale-110 cursor-pointer"
      >
        next
      </button>
    </footer>
  );
}
