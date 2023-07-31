import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
export default function EventsPagination({ setPath, setEvents }) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 5;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    axiosClient
      .get(`/events?page=${page}&limit=${limit}`)
      .then((res) => {
        const { events, totalPages } = res.data;
        setEvents(events);
        setTotalPages(totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  const handleCurrentPage = (item, e) => {
    setPage(item);
  };
  const handlePrevious = () => {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  };
  const handleNext = () => {
    setPage((p) => {
      if (p === totalPages) return p;
      return p + 1;
    });
  };
  return (
    <footer className="space-x-5">
      <button
        disabled={page === 1}
        onClick={handlePrevious}
        className="px-3 py-2 rounded bg-[#315a49c4] text-white hover:scale-110 cursor-pointer"
      >
        Previous
      </button>
      {pages.map((item) => {
        return (
          <>
            <button
              onClick={(e) => handleCurrentPage(item, e)}
              className="px-4 py-2 rounded bg-[#315a49c4] text-white hover:scale-110 cursor-pointer"
            >
              {item}
            </button>
          </>
        );
      })}
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
