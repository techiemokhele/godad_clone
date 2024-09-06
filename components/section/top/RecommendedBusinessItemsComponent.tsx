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
    data.length === 3 ? data.slice(0, 2) : [data[data.length - 2]];

  const handleViewMainItem = () => {
    console.log("explore main item");
  };

  return (
    <div className="flex flex-row w-full gap-4 text-black-1 px-16">
      {/* left: latest item one items */}
      <div className={`flex flex-col rounded-md w-1/2 bg-cream-4 p-4 gap-6`}>
        <div className="flex items-center justify-center w-full pt-4 px-10">
          <Image
            src="/images/leftTopBanner.jpg"
            alt={lastItem.name}
            width={1000}
            height={1000}
            className="h-36"
          />
        </div>
        <div className="flex flex-col items-start justify-end w-full gap-2">
          <h3 className="text-xl font-bold">{lastItem.name}</h3>
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

      {/* right: 2nd last two items, one if only two */}
      <div className="flex flex-col w-1/2 gap-5">
        {rightItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row-reverse rounded-md bg-cream-4 p-4 gap-6`}
          >
            <div className="flex items-center justify-center w-full py-2">
              <Image
                src="/images/leftTopBanner.jpg"
                alt={item.name}
                width={1000}
                height={1000}
                className="w-18 h-18 object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-1">
              <h3 className="text-sm">{item.name}</h3>
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
        ))}
      </div>
    </div>
  );
};

export default RecommendedBusinessItemsComponent;
