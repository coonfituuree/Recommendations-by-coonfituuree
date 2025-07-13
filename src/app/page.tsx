"use client";

import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { courseList } from "@/data/courses";
import { musicList } from "@/data/musics";
import MusicCard from "@/components/MusicCard";

export default function Home() {
  const [selected, setSelected] = useState<
    "books" | "playlist" | "courses" | null
  >(null);

  const renderContent = () => {
    switch (selected) {
      case "books":
        return (
          <div className="mt-10 font-bold">
            <div className="2xl:text-3xl">📚 The books I recommend:</div>
            <div className="2xl:mt-7 xs:mt-3 text-blue-900">
              <a
                className="2xl:text-2xl transition-transform transform hover:scale-105 inline-block"
                href=""
              >
                1. Atomic Heart
              </a>{" "}
              <br />
              <a
                className="2xl:text-2xl transition-transform transform hover:scale-105 inline-block"
                href=""
              >
                2. The 48 Laws of Power
              </a>{" "}
              <br />
              <a
                className="2xl:text-2xl transition-transform transform hover:scale-105 inline-block"
                href=""
              >
                3. Martian{" "}
              </a>
            </div>
          </div>
        );
      case "playlist":
        return (
          <div className="text-white 2xl:text-3xl font-bold">
            {" "}
            My Playlists (clickable)
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center justify-items-center mt-8">
              {musicList.map((music, idx) => (
                <MusicCard key={idx} {...music} />
              ))}
            </div>
          </div>
        );
      case "courses":
        return (
          <div className="2xl:mt-5 text-xl font-bold xs:mt-5 text-center">
            <div className="text-white 2xl:text-3xl mb-4 xs:text-3xl px-4">
              Online Courses that I’ve learned (or have been learning):
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center justify-items-center mt-8">
              {courseList.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="bg-[#141414] min-h-screen flex items-center flex-col justify-start">
      <div className="text-white pt-32 font-jura font-bold text-4xl xs:text-3xl xs:text-center">
        RECOMMENDATIONS BY COONFITUUREE
      </div>

      {!selected && (
        <div className="flex gap-5 mt-16 2xl:flex-row xs:flex-col">
          <button
            onClick={() => setSelected("books")}
            className="text-white bg-[#222222] px-10 py-3 rounded-full hover:bg-[#710077] transition-colors"
          >
            📗 Books
          </button>
          <button
            onClick={() => setSelected("playlist")}
            className="text-white bg-[#222222] px-10 py-3 rounded-full hover:bg-[#710077] transition-colors"
          >
            🎧 Playlist
          </button>
          <button
            onClick={() => setSelected("courses")}
            className="text-white bg-[#222222] px-10 py-3 rounded-full hover:bg-[#710077] transition-colors"
          >
            🖥️ Online Courses
          </button>
        </div>
      )}

      {selected && (
        <div className="mt-12 text-center flex flex-col items-center">
          {renderContent()}
          <button
            onClick={() => setSelected(null)}
            className="mt-8 2xl:mb-10 xs:mb-20  text-white bg-[#222222] px-13 py-2 rounded-full hover:bg-[#29222a] transition-colors"
          >
            ⬅ Back
          </button>
        </div>
      )}
    </div>
  );
}
