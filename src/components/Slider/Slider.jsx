// app/page.jsx or wherever you're using it

import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import Slider from "./SliderClient";

export default async function HomePage() {
  const bannerData = await dbConnect(collectionNamesOb.bannerCollection);
  const bannersRaw = await bannerData.find({}).toArray();

  const banners = bannersRaw.map((banner) => ({
    _id: banner._id.toString(), // convert ObjectId to string
    title: banner.title,
    subTitle: banner.subTitle,
    img: banner.img,
  }));

  return (
    <main>
      <Slider banners={banners} />
    </main>
  );
}
