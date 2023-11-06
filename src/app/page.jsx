import nextImage from "next/image";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center h-[80vh]">
      <div className="md:flex md:flex-col mx-5 ">
        <h1 className="text-[50px]"> London estates </h1>
        <p>Affordable rent available at london estates</p>
      </div>
      <div className="mx-20">
        <Image
          as={nextImage}
          src="/image/h1.jpg"
          width={500}
          height={500}
          radius="lg"
          alt="london houses"
        ></Image>
      </div>
    </div>
  );
}
