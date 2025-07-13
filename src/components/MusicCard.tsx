import Image from "next/image";

interface MusicCardProps {
  thumbnail: string;
  name: string;
  author: string;
  link: string;
}

const MusicCard = ({ thumbnail, name, author, link }: MusicCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[350px] h-[78px] bg-[#222222] rounded-md flex items-center justify-between px-4 hover:bg-[#2c2c2c] transition-colors"
    >
      <div className="flex items-center gap-2">
        <Image
          src={thumbnail}
          alt={name}
          width={55}
          height={55}
          className="rounded-md"
        />
        <p className="text-white pl-2 text-base">{name}</p>
      </div>
      <p className="text-zinc-400 text-base">{author}</p>
    </a>
  );
};

export default MusicCard;
