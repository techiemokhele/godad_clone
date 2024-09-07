import RetainCustomerInfoItemComponent from "./middle/RetainCustomerInfoItemComponent";

const RetainCustomerInfoComponent = () => {
  return (
    <section className="flex flex-col gap-6 text-white-1 justify-start items-start lg:px-36 px-4">
      <h1 className="text-3xl md:text-4xl font-semibold w-3/4 md:w-2/3 md:px-6">
        Moving forward and up alongside our clients
      </h1>

      <RetainCustomerInfoItemComponent />
    </section>
  );
};

export default RetainCustomerInfoComponent;
