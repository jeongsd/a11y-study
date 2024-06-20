import { Metadata } from "next";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>마가리타 </h1>
      <Image src="/magarita.png" alt="" width={608} height={450} priority />
    </div>
  );
}

export const metadata: Metadata = {
  title: "마가리타 - 웹 접근성 스터디",
  description: "무더운 여름에 시원하게 즐기는 칵테일",
};
