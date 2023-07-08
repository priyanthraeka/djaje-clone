import DetailProduct from "@/components/DetailProduct";

const page = ({ params }) => {
  return <DetailProduct id={params.id} />;
};

export default page;
