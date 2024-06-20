import { Metadata } from "next";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>화이타</h1>
      <Image src="/fajita.png" alt="" width={608} height={450} priority />
    </div>
  );
}

export const metadata: Metadata = {
  title: "화이타 메뉴 - 웹 접근성 스터디",
  description: "화이타에 대한 설명",
};
