// app/page.jsx or wherever you're using it

import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import Slider from "./SliderClient";

export default async function HomePage() {
  const bannerData = await dbConnect(collectionNamesOb.bannerCollection);
  const banners = await bannerData.find({}).toArray();

  return (
    <main>
      <Slider banners={banners} />
    </main>
  );
}
