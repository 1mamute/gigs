// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function imageLoader({ src }: any) {
  return `${process.env.BASE_PATH}/${src}`;
}
