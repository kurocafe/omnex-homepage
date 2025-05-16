import InfoButton from "@/components/infoButton";
import Logo from "@/components/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="absolute mx-15">
        <Logo />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-60">
            <Link href={"/about"}>
              <InfoButton
                title="ABOUT US"
                imageUrl="/IMG_0642.png"
                alt="about us"
              />
            </Link>
            <Link href={"/"}>
              <InfoButton
                title="THE PROJECTS"
                imageUrl="/IMG_0643.png"
                alt="the projects"
              />
            </Link>
          </div>
          <div className="">
            <Link href={"/"}>
              <InfoButton
                title="COLAB WITH US"
                imageUrl="/IMG_0644.png"
                alt="about us"
              />
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
}