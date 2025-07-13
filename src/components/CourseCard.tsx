import Image from "next/image";

interface CourseCardProps {
  thumbnail: string;
  badge?: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  link: string;
}

export default function CourseCard({
  thumbnail,
  badge,
  title,
  description,
  author,
  authorImage,
  link,
}: CourseCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[350px] h-[330px] bg-[#222222] rounded-[10px] overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
    >
      <div className="relative w-full h-[180px]">
        <Image
          src={thumbnail}
          alt="Course thumbnail"
          layout="fill"
          objectFit="cover"
        />
        {badge && (
          <span className="absolute top-2 right-2 bg-[#ff4d4d] text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="px-4 py-3 text-white">
        <h2 className="text-base font-bold mb-1">{title}</h2>
        <p className="text-sm text-zinc-400 mb-3">{description}</p>
        <div className="flex items-center gap-2">
          <Image
            src={authorImage}
            alt={author}
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-base text-white">{author}</p>
        </div>
      </div>
    </a>
  );
}
