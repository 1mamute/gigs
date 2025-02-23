import { parse } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Show } from "../classes/show";
import createShowUri from "../utils/createShowUri";
import imageLoader from "../utils/loader";

type HomeCardProps = {
  show: Show;
};

export default function HomeCard({ show }: HomeCardProps) {
  const convertedDate = parse(show.date, "dd/MM/yyyy", new Date());
  return (
    <div className="content-center w-full h-full">
      <Link href={`/show/${createShowUri(show)}`}>
        <a>
          <Image
            src={`${
              process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : ""
            }/assets/${convertedDate.getFullYear()}/${convertedDate.getMonth() + 1}/${show.img}`}
            alt={show.name ? show.name : ""}
            layout="fill"
            objectFit="contain"
            loader={imageLoader}
          />
        </a>
      </Link>
    </div>
  );
}
