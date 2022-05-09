type Props = {
  textSize?: string;
  className?: string;
};

export default function Logo({ textSize, className }: Props) {
  return (
    <span className={`font-newake font-bold tracking-wider ${textSize ? textSize : `text-6xl`} ${className}`}>
      <span className="underline underline-offset-4 ">UNDER</span>
      <span className="px-1 pt-2 text-white bg-clip-padding bg-black">SHOWS</span>
    </span>
  );
}
