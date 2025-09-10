// app/page.jsx or wherever you're using it

import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import SliderClient from "./SliderClient";

export default async function Slider() {
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
      <SliderClient banners={banners} />
    </main>
  );
}
