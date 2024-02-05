import Image from "next/image";
import MapImage from "/public/letshoop_map.png";
import CourtImage from "/public/letshoop_court.png";
import ProfileImage from "/public/letshoop_profile.png";
import FavoriteImage from "/public/letshoop_favorite.png";
import CheckinImage from "/public/letshoop_checkin.png";

import AppStoreButton from "@/components/app-store-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center flex-1">
      <section>
        <h1>Welcome to Let's Hoop</h1>
        <h3>Find basketball courts near you!</h3>
        <Image src={MapImage} alt="Let's Hoop map" height={400} />

        <AppStoreButton />
      </section>
      <section>
        <h2>Check court details</h2>
        <Image src={CourtImage} alt="Let's Hoop court" height={400} />
      </section>
      <section>
        <h2>Create a profile and add your favorite courts</h2>
        <Image src={ProfileImage} alt="Let's Hoop profile" height={400} />
        <Image src={FavoriteImage} alt="Let's Hoop favorite" height={400} />
      </section>

      <section>
        <h2>Check-in to a court when you are hooping</h2>
        <Image src={CheckinImage} alt="Let's Hoop checkin" height={400} />
      </section>
    </main>
  );
}
