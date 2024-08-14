import React from "react";

const Menu = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Menu</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <span className="ml-2 flex-1 w-0 truncate">Appetizers</span>
              </div>
            </li>
            <li className="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <span className="ml-2 flex-1 w-0 truncate">Salads</span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Available
                </span>
              </div>
            </li>
            <li className="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <span className="ml-2 flex-1 w-0 truncate">Entrees</span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Available
                </span>
              </div>
            </li>
            <li className="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <span className="ml-2 flex-1 w-0 truncate">Sides</span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Available
                </span>
              </div>
            </li>
            <li className="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <span className="ml-2 flex-1 w-0 truncate">Desserts</span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Available
                </span>
              </div>
            </li>
            <li className="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <span className="ml-2 flex-1 w-0 truncate">Beverages</span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Available
                </span>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </div>
  );
};

export { Menu };
