import RetainCustomerInfoItemComponents from "./middle/RetainCustomerInfoItemComponents";

const RetainCustomerInfoComponents = () => {
  return (
    <section className="flex flex-col gap-6 text-white-1 justify-start items-start lg:px-36 px-4">
      <h1 className="text-2xl md:text-4xl lg:text-4xl px-10 md:px-24 lg:px-40 font-semibold text-center">
        Moving forward and up alongside our clients
      </h1>

      <RetainCustomerInfoItemComponents />
    </section>
  );
};

export default RetainCustomerInfoComponents;
