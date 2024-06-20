import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>마가리타 </h1>
      <Image src="/magarita.png" alt="" width={608} height={450} priority />
    </div>
  );
}
