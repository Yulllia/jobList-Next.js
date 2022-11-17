type LoaderInerface = {
  src: string;
  width: number;
  quality?: number | undefined;
};
export default function myLoader({ src, width, quality }: LoaderInerface) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
