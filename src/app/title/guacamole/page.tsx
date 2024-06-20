import { Metadata } from "next";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>과카몰레</h1>
      <Image src="/guacamole.png" alt="" width={608} height={450} priority />
    </div>
  );
}

export const metadata: Metadata = {
  title: "과카몰레 - 웹 접근성 스터디",
  description: "과카몰레는 맛있는 아보카도 어쩌구 저쩌구 ",
};
