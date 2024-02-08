import Image from "next/image";
import MapImage from "/public/letshoop_map.png";
import CourtImage from "/public/letshoop_court.png";
import ProfileImage from "/public/letshoop_profile.png";
import FavoriteImage from "/public/letshoop_favorite.png";
import CheckinImage from "/public/letshoop_checkin.png";

import AppStoreButton from "@/components/app-store-button";

export default function Home() {
  return (
    <>
      <section className="px-4 py-12 w-full flex flex-col items-center md:flex-row md:justify-around max-w-screen-lg">
        <div className="-z-10 top-0 left-0 absolute w-screen h-[550px] bg-orange-700 rounded-b-3xl" />
        <div className="flex flex-col items-center">
          <div className="pb-8">
            <h1 className="text-white text-4xl text-center">
              Welcome to Let's Hoop
            </h1>
            <h3 className="text-white text-center">
              Find basketball courts near you!
            </h3>
          </div>
          <div className="pb-8">
            <AppStoreButton />
          </div>
        </div>

        <Image
          className="pb-8"
          src={MapImage}
          alt="Let's Hoop map"
          height={401}
          width={192}
        />
      </section>
      <section className="px-4 py-12 flex flex-col md:flex-row-reverse w-full max-w-screen-lg justify-around items-center md:items-start">
        <h2 className="text-3xl text-center pb-8 md:pb-0">
          Check court details
        </h2>
        <Image
          src={CourtImage}
          alt="Let's Hoop court"
          height={401}
          width={192}
        />
      </section>
      <section className="px-4 relative py-12 w-full flex justify-center items-center">
        <div className="-z-10 top-0 left-0 absolute w-screen h-[800px] sm:h-[400px] bg-orange-50" />
        <div className="max-w-screen-lg flex flex-col items-start md:flex-row md:justify-around">
          <h2 className="text-3xl text-center pb-8 md:pb-0">
            Create a profile and add your favorite courts
          </h2>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
            <Image
              src={ProfileImage}
              alt="Let's Hoop profile"
              height={401}
              width={192}
            />
            <Image
              src={FavoriteImage}
              alt="Let's Hoop favorite"
              height={401}
              width={192}
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 pb-16 flex flex-col md:flex-row-reverse w-full max-w-screen-lg justify-around items-center md:items-start">
        <h2 className="text-3xl text-center pb-8 md:pb-0">
          Check-in to a court when you are hooping
        </h2>
        <Image
          src={CheckinImage}
          alt="Let's Hoop checkin"
          height={401}
          width={192}
        />
      </section>
    </>
  );
}
