import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        <Link href="/title">14. title</Link>
      </p>
      <p>
        <Link href="/lang">15. lang</Link>
      </p>
      <p>
        <Link href="/lang">16. Image</Link>
      </p>
    </div>
  );
}
