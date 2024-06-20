import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>과카몰레</h1>
      <Image src="/guacamole.png" alt="" width={608} height={450} priority />
    </div>
  );
}
