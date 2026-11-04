import fs from "fs";
import path from "path";

export function imageExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

// Image slot for the case study. Drop a file at public/<src> and it shows up
// on the next build; until then the fallback renders, or nothing at all.
export default function CaseFigure({
  src,
  alt,
  caption,
  children,
}: {
  src: string;
  alt: string;
  caption?: string;
  children?: React.ReactNode;
}) {
  const exists = imageExists(src);
  if (!exists && !children) return null;

  return (
    <figure className="figure">
      {exists ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/${src}`} alt={alt} loading="lazy" />
      ) : (
        children
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
