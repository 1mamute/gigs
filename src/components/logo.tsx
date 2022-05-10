type LogoProps = {
  textSize?: string;
  invertColors?: boolean;
};

export default function Logo({ textSize, invertColors }: LogoProps) {
  return (
    <span className={`font-newake font-bold tracking-wider ${textSize ? textSize : `text-6xl`}`}>
      <span className={`underline underline-offset-4 text-black pt-2 ${invertColors ? ` invert ` : ``}`}>UNDER</span>
      <span className={`px-1 pt-2 text-white bg-clip-padding bg-black hover:invert ${invertColors ? ` invert ` : ``}`}>
        SHOWS
      </span>
    </span>
  );
}
