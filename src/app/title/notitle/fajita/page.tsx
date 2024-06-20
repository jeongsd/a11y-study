import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>화이타</h1>
      <Image src="/fajita.png" alt="" width={608} height={450} priority />
    </div>
  );
}
