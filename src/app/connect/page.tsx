import InfoButton from "@/components/infoButton";
import Logo from "@/components/logo";
import Link from "next/link";

export default function Connect() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="absolute mx-15">
        <Logo />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-10">
          <div className="flex space-x-60">
            <Link href={"/about"}>
              <InfoButton
                title="ABOUT US"
                imageUrl="/IMG_0642.png"
                hoverImageUrl="/IMG_0643.png"
                alt="about us"
              />
            </Link>
            <Link href={"/marketplace"}>
              <InfoButton
                title="OUR MARKETPLACE"
                imageUrl="/IMG_0643.png"
                hoverImageUrl="/IMG_0644.png"
                alt="the projects"
              />
            </Link>
          </div>
          <div className="">
            <Link href={"/colab"}>
              <InfoButton
                title="COLAB WITH US"
                imageUrl="/IMG_0644.png"
                hoverImageUrl="/IMG_0642.png"
                alt="about us"
              />
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
}