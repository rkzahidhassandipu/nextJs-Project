import dbConnect from "@/lib/dbConnect";

const ServiceSection = async ({}) => {
  
  const serviceCollection = dbConnect("test_services");
  const data = await serviceCollection.find({}).toArray();

  return <div>
    {JSON.stringify(data)}
  </div>;
};

export default ServiceSection;
