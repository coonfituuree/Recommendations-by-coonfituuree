"use client";

import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<
    "books" | "playlist" | "courses" | null
  >(null);

  const renderContent = () => {
    switch (selected) {
      case "books":
        return (
          <div className="text-2xl mt-10">
            📚 Книги, которые мы рекомендуем: <br />– Atomic Habits
            <br />– Deep Work
            <br />– The Power of Now
          </div>
        );
      case "playlist":
        return (
          <div className="text-4xl mt-10">
            <a
              href="https://music.apple.com/kz/playlist/car/pl.u-EdAVkG3sD42YDLW"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-105 inline-block"
            >
              🎧 Apple Music
            </a>

            <br />
            <div className="mt-4 text-2xl" >(If u don't have Apple Music just get out of this section)</div>
          </div>
        );
      case "courses":
        return (
          <div className="text-2xl mt-10 text-center">
            <div className="mb-4">
              Online Courses that I've learned (or learning):
            </div>

            <a
              href="https://youtu.be/M9O5AjEFzKw?si=4rrrT87_L2zXJfiU"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-105 inline-block text-blue-700"
            >
              1. React Monster Course – 50 hours by Huxn WebDev
            </a>
            <br />
            <a
              href="https://youtu.be/M9O5AjEFzKw?si=4rrrT87_L2zXJfiU"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-105 inline-block text-blue-700"
            >
              1. Next JS Course by Huxn WebDev
            </a>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="bg-[#FFD4D4] min-h-screen flex items-center flex-col justify-start">
      <div className="pt-30 font-jura font-bold text-4xl">
        RECOMMENDATIONS BY COONFITUUREE
      </div>

      {!selected && (
        <div className="flex gap-5 mt-16">
          <button
            onClick={() => setSelected("books")}
            className="text-white bg-[#460049] px-10 py-3 rounded-full hover:bg-[#710077] transition-colors"
          >
            📗 Books
          </button>
          <button
            onClick={() => setSelected("playlist")}
            className="text-white bg-[#460049] px-10 py-3 rounded-full hover:bg-[#710077] transition-colors"
          >
            🎧 Playlist
          </button>
          <button
            onClick={() => setSelected("courses")}
            className="text-white bg-[#460049] px-10 py-3 rounded-full hover:bg-[#710077] transition-colors"
          >
            🖥️ Online Courses
          </button>
        </div>
      )}

      {/* Контент после выбора */}
      {selected && (
        <div className="mt-12 text-center flex flex-col items-center">
          {renderContent()}
          <button
            onClick={() => setSelected(null)}
            className="mt-8 text-white bg-[#710077] px-5 py-2 rounded-full hover:bg-[#910599] transition-colors"
          >
            ⬅ Back
          </button>
        </div>
      )}
    </div>
  );
}
