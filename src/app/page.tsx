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
          <div className="text-2xl mt-10 font-bold">
            <div className="2xl:text-4xl">📚 The books I recommend:</div>
            <div className="2xl:mt-7 xs:mt-3 text-blue-900">
              <a className="2xl:text-3xl" href="">1. Atomic Heart</a> <br />
              <a className="2xl:text-3xl" href="">2. The 48 Laws of Power</a> <br />
              <a className="2xl:text-3xl" href="">3. Martian </a>
            </div>
          </div>
        );
      case "playlist":
        return (
          <div className="text-4xl mt-10 font-bold xs:text-3xl">
            <a
              href="https://music.apple.com/kz/playlist/car/pl.u-EdAVkG3sD42YDLW"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-105 inline-block text-blue-900"
            >
              🎧 Apple Music
            </a>

            <br />
            <div className="mt-4 xs:mt-3 text-2xl xs:text-xl">
              (If u don’t have Apple Music then get out of this section)
            </div>
          </div>
        );
      case "courses":
        return (
          <div className="2xl:mt-10 text-xl font-bold xs:mt-5 text-center">
            <div className="2xl:text-3xl mb-4 xs:text-2xl">
              Online Courses that I’ve learned (or been learning):
            </div>

            <a
              href="https://youtu.be/M9O5AjEFzKw?si=4rrrT87_L2zXJfiU"
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:text-2xl transition-transform transform hover:scale-105 inline-block text-blue-900"
            >
              1. React Monster Course – 50 hours by Huxn WebDev
            </a>
            <br />
            <a
              href="https://youtu.be/QIDkK0FbXDc?si=O3a_rFnTM_tC65BM"
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:text-2xl xs:mt-2 transition-transform transform hover:scale-105 inline-block text-blue-900"
            >
              2. Next JS Course by Huxn WebDev
            </a>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="bg-[#FFD4D4] min-h-screen flex items-center flex-col justify-start">
      <div className="pt-32 font-jura font-bold text-4xl xs:text-3xl xs:text-center">
        RECOMMENDATIONS BY COONFITUUREE
      </div>

      {!selected && (
        <div className="flex gap-5 mt-16 xs:flex xs:flex-col">
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
