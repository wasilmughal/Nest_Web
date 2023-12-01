import React from "react";

function ShopListcard({ image1, image2, cat, title, price1, price2 }) {
  return (
    <>
      <div className="flex flex-row w-[100%] md:h-[300px] h-[850px] md:border-none border p-2 flex-wrap rounded-xl">
        <div className="sm:w-[30%]  group flex justify-center">
          <img
            src={image1}
            alt=""
            className="border rounded-xl w-[90%] group-hover:hidden  duration-300 object-cover"
          />
          <img
            src={image2}
            alt=""
            className="border rounded-xl w-[90%] hidden group-hover:block duration-300  object-cover"
          />
        </div>
        <div className="sm:w-[70%]  ">
          <div className="flex flex-col mt-5">
            <span className="text-[13px] text-gray-500">{cat}</span>
            <h1 className="text-[28px] text-gray-800 hover:text-[#3BB77E] duration-300 flex flex-wrap">
              {title}
            </h1>
            <p class="leading-relaxed mb-3 flex items-center text-[12px] text-gray-500">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 1"
                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                  fill="#FFE033"
                />
              </svg>
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 1"
                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                  fill="#FFE033"
                />
              </svg>
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 1"
                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                  fill="#FFE033"
                />
              </svg>
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 1"
                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                  fill="#FFE033"
                />
              </svg>
              (4.0)
            </p>

            <p className="text-[13px] text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              beatae consectetur, atque inventore aliquam adipisci perspiciatis
              nostrum qui consequatur praesentium?
            </p>
            <div className="flex mt-4 text-[30px] text-[#3BB77E] items-baseline gap-2">
              <span>{price1}</span>
              <span className="text-gray-500 text-[18px]">{price2}</span>
            </div>
            <div className="flex-row flex gap-5">
              <button className="flex items-center justify-center bg-[#3BB77E] w-32 h-8 rounded-sm mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                    fill="white"
                  />
                </svg>
                <p className="text-white text-[12px]">Add to cart</p>
              </button>

              <button className="flex items-center justify-center  w-32 h-8 rounded-sm mt-3">
                <svg
                  fill="none"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#000">
                    <path d="m10.067 16.4409c.334.918 1.306 1.6 2.28 1.6h6.167c.55 0 .996-.444.996-1 0-.2645-.1048-.5183-.2915-.7057-.1866-.1874-.44-.2932-.7045-.2943h-6.167c-.133 0-.355-.156-.401-.284l-.816-2.263zm-2.12699-5.894-.816-2.26298c-.044-.124-.273-.284-.402-.284h-2.724c-.542 0-.998-.448-.998-1 0-.556.447-1 .998-1h2.724c.97 0 1.949.686 2.282 1.6l-1.064 2.94598z" />
                    <path d="m19.51 6.99992c0-.26453-.1048-.51828-.2915-.7057-.1866-.18742-.44-.29324-.7045-.2943h-6.167c-.976 0-1.95.684-2.283 1.605l-2.93999 8.15198c-.044.123-.273.284-.402.284h-2.724c-.1313-.0002-.26136.0255-.3827.0756-.12133.0502-.23154.1239-.32429.2168-.09275.093-.16621.2033-.21616.3248-.04994.1214-.07538.2515-.07485.3828 0 .552.456 1 .998 1h2.724c.972 0 1.953-.689 2.284-1.606l2.93999-8.15098c.046-.128.268-.284.401-.284h6.167c.55 0 .996-.444.996-1z" />
                    <path d="m17.293 8.29292c-.0955.09225-.1717.20259-.2241.32459-.0524.12201-.08.25323-.0811.38601-.0012.13278.0241.26446.0744.38735.0503.1229.1245.23455.2184.32844.0939.0939.2056.16815.3285.21843s.2545.07556.3873.07446c.1328-.0012.264-.02877.386-.08118s.2324-.12859.3246-.2241l1.996-1.996c.0942-.09293.1689-.20363.2199-.32569.0511-.12205.0773-.25302.0773-.38531s-.0262-.26326-.0773-.38531c-.051-.12206-.1257-.23276-.2199-.32569l-1.996-1.996c-.1886-.18216-.4412-.28295-.7034-.28068-.2622.00228-.513.10745-.6984.29286s-.2906.43622-.2929.69842c-.0022.26219.0985.5148.2807.7034l1.293 1.293zm0 9.99998c-.1822.1886-.2829.4412-.2807.7034.0023.2622.1075.513.2929.6984s.4362.2906.6984.2929.5148-.0985.7034-.2807l1.996-1.996c.0942-.0929.1689-.2036.2199-.3257.0511-.122.0773-.253.0773-.3853s-.0262-.2632-.0773-.3853c-.051-.122-.1257-.2328-.2199-.3257l-1.996-1.996c-.1886-.1821-.4412-.2829-.7034-.2807-.2622.0023-.513.1075-.6984.2929s-.2906.4362-.2929.6984c-.0022.2622.0985.5148.2807.7034l1.293 1.293z" />
                  </g>
                </svg>

                <p className="text-black text-[12px]">Add Compare</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopListcard;
