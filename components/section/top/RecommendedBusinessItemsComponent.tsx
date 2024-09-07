import Image from "next/image";
import { ProductDataItemProps } from "@/types";
import ButtonComponent from "@/components/common/ButtonComponent";

const RecommendedBusinessItemsComponent = ({
  data,
}: {
  data: ProductDataItemProps[];
}) => {
  // Extract the last item for the left side
  const lastItem = data[data.length - 1];
  const rightItems =
    data.length === 3
      ? data.slice(0, 2)
      : data.length === 2
      ? data.slice(0, 1)
      : [data[data.length - 2]];

  const handleViewMainItem = () => {
    console.log("Explore main item");
  };

  return (
    <div className="flex flex-col md:flex-row w-full gap-4 text-black-1 lg:px-24 px-8">
      {/* Left: Latest item (one item) */}
      <div
        className={`flex flex-col rounded-md md:w-1/2 max-w-full p-4 gap-6`}
        style={{
          backgroundColor: lastItem.color || "#F2D09D",
          color:
            lastItem.color === "#222"
              ? "#fff"
              : lastItem.color === "#21759b"
              ? "#fff"
              : "#111",
        }}
      >
        <div className="flex items-center justify-center w-full pt-4 px-6">
          <Image
            priority
            src={lastItem.productImage}
            alt={lastItem.name}
            width={1000}
            height={1000}
            className="lg:h-[240px] h-56 rounded-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 "
          />
        </div>
        <div className="flex flex-col items-start justify-end w-full gap-2">
          <h3 className="text-xl font-bold">
            {lastItem.domain} {lastItem.name}
          </h3>
          <p className="text-[10px] w-4/5">{lastItem.description}</p>
          <ButtonComponent
            type="button"
            text={lastItem.buttonText}
            onClick={handleViewMainItem}
            decoration="primary"
            rounded={false}
            primaryDark={true}
            hoverShowIcon={false}
          />
        </div>
      </div>

      {/* Right: If one item, render like left, else keep current design */}
      <div className="flex flex-col md:w-1/2 w-full gap-5">
        {rightItems.length === 1 ? (
          <div
            className={`flex flex-col rounded-md p-4 gap-6`}
            style={{
              backgroundColor: rightItems[0].color || "#F2D09D",
              color:
                rightItems[0].color === "#222"
                  ? "#fff"
                  : rightItems[0].color === "#21759b"
                  ? "#fff"
                  : "#111",
            }}
          >
            <div className="flex items-center justify-center w-full pt-4 px-6">
              <Image
                priority
                src={rightItems[0].productImage}
                alt={rightItems[0].name}
                width={1000}
                height={1000}
                className="lg:h-[240px] h-56 rounded-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 "
              />
            </div>
            <div
              className={`flex flex-col items-start justify-end w-full gap-2`}
            >
              <h3 className="text-xl font-bold">
                {rightItems[0].domain} {rightItems[0].name}
              </h3>
              <p className="text-[10px] w-4/5">{rightItems[0].description}</p>
              <ButtonComponent
                type="button"
                text={rightItems[0].buttonText}
                onClick={handleViewMainItem}
                decoration="primary"
                rounded={false}
                primaryDark={true}
                hoverShowIcon={false}
              />
            </div>
          </div>
        ) : (
          rightItems.map((item, index) => (
            <div
              key={index}
              className={`flex rounded-md p-4 gap-6`}
              style={{
                backgroundColor: item.color || "#F2D09D",
                color:
                  item.color === "#222"
                    ? "#fff"
                    : item.color === "#21759b"
                    ? "#fff"
                    : "#111",
              }}
            >
              <div className="flex items-center justify-center w-full py-2">
                <Image
                  src={item.productImage}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  className="w-full lg:w-56 lg:h-[152px] h-36  object-cover rounded-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 "
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-1">
                <h3 className="text-sm font-semibold">
                  {item.domain} {item.name}
                </h3>
                <p className="text-[8px] pb-1">{item.description}</p>
                <ButtonComponent
                  type="button"
                  text={item.buttonText}
                  onClick={handleViewMainItem}
                  decoration="primary"
                  rounded={false}
                  primaryDark={true}
                  hoverShowIcon={false}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecommendedBusinessItemsComponent;
