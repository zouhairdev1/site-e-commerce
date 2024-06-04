import React from 'react';
import { Link } from "react-router-dom";
// Constants for reused Tailwind classes
const CONTAINER = 'bg-white  p-4';
const CONTAINERCARD = 'bg-white ';
const LINK_GRAY = 'text-gray-500';

export default function Selling() {
    const sellerProfile = {
        id: 1,
        name: "John Doe",
        totalIncome: "2000 $",
        views: 200,
        orders: 20,
        products: [
            {
                id: 1,
                name: "MEN'S PANTS by ZARA",
                views: 1,
                orders: 0,
                sales: 500,
                imageUrl: "https://placehold.co/60x80"
            },
            {
                id: 2,
                name: "WOMEN'S SHIRT by H&M",
                views: 5,
                orders: 2,
                sales: 1000,
                imageUrl: "https://placehold.co/60x80"
            },
            {
                id: 2,
                name: "WOMEN'S SHIRT by H&M",
                views: 5,
                orders: 2,
                sales: 1000,
                imageUrl: "https://placehold.co/60x80"
            },
            // Add more products as needed
        ]
    };

    return (
        <div className="max-w-400 px-4 mt-10">
            <div className="grid-cart grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg border border-double border-gray-200 p-4 w-3/4">
                    <ProductsPanel products={sellerProfile.products} />
                </div>
                <StatisticsPanel totalIncome={sellerProfile.totalIncome} views={sellerProfile.views} orders={sellerProfile.orders} />
            </div>
            <div className="grid-cart grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-3/4">
                    <TransactionSettings />
                    </div>
                    <div className="pl-8">
                    <YourStore />
                    </div>
            </div>
        </div>
    );
}

function ProductsPanel({ products }) {
    return (
        <div className="col-span-1 md:col-span-2 md:w-full">
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4 ">
                <div className="flex justify-between items-center">
                <svg className="w-8 h-8 mr-2" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.1686 9.29167L16.5853 2L2.00195 9.29167V23.875L16.5853 31.1667L31.1686 23.875V9.29167Z" stroke="#111111" stroke-width="3.75" stroke-linejoin="round"/>
                <path d="M2.00195 9.29183L16.5853 16.5835M16.5853 16.5835V31.1668M16.5853 16.5835L31.1686 9.29183M23.877 5.646L9.29362 12.9377" stroke="#111111" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h1 className="text-xl font-semibold">Your Products</h1>
                <div className="pl-4">
    <Link className="rounded-lg border border-gray-300 bg-white px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300" to={"/addproduct"}>+ Add New</Link>
                </div></div>
                <a href="#" className={LINK_GRAY}>Manage products →</a>
            </div>
            <div className="space-y-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="mt-4 border-t border-gray-200">
                <a href="#" className={`${LINK_GRAY} py-2 block text-center`}>Manage all your products →</a>
            </div>
        </div>
    );
}

function ProductCard({ product }) {
    return (
        <div className={`${CONTAINER} flex items-center justify-between`}>
            <div className="flex items-center"> {/* Use flexbox to align items horizontally */}
                <img src={product.imageUrl} alt="Product" className="w-12 h-18 rounded-lg mr-4" /> {/* Added width, height, and margin */}
                <div>
                    <p className="font-semibold">{product.name}</p>
                    <p>
                        <span className="font-semibold">{product.views}</span> views, 
                        <span className="font-semibold">{product.orders}</span> orders, 
                        <span className="font-semibold">{product.sales}</span> sales,
                    </p>

                </div>
            </div>
            <div className="flex space-x-2">
    <button className="flex items-center justify-center text-white rounded-lg border border-gray-300 bg-red-500 px-4 py-2 hover:bg-red-900 hover:text-white transition-colors duration-300">
    <svg className="w-4 h-4 mr-2" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15714 3.75V1.875H10.0429V3.75H5.15714ZM3.52857 3.75V1.25C3.52857 0.918479 3.64296 0.600537 3.84657 0.366117C4.05018 0.131696 4.32634 0 4.61429 0L10.5857 0C10.8737 0 11.1498 0.131696 11.3534 0.366117C11.557 0.600537 11.6714 0.918479 11.6714 1.25V3.75H14.3857C14.6017 3.75 14.8088 3.84877 14.9615 4.02459C15.1142 4.2004 15.2 4.43886 15.2 4.6875C15.2 4.93614 15.1142 5.1746 14.9615 5.35041C14.8088 5.52623 14.6017 5.625 14.3857 5.625H13.9894L13.1827 17.6912C13.1409 18.3193 12.8946 18.906 12.4933 19.3341C12.0919 19.7621 11.5649 20 11.0178 20H4.18217C3.63505 20 3.10812 19.7621 2.70673 19.3341C2.30535 18.906 2.05911 18.3193 2.01726 17.6912L1.21057 5.625H0.814286C0.598324 5.625 0.391207 5.52623 0.238499 5.35041C0.0857906 5.1746 0 4.93614 0 4.6875C0 4.43886 0.0857906 4.2004 0.238499 4.02459C0.391207 3.84877 0.598324 3.75 0.814286 3.75H3.52857ZM2.84457 5.625H12.3554L11.5585 17.5475C11.5481 17.7045 11.4867 17.8511 11.3864 17.9582C11.2862 18.0653 11.1546 18.1248 11.0178 18.125H4.18217C4.04544 18.1248 3.91381 18.0653 3.81357 17.9582C3.71333 17.8511 3.65188 17.7045 3.64149 17.5475L2.84457 5.625Z" fill="white"/>
    </svg>
        Remove
    </button>
    <Link className="rounded-lg border border-gray-300 bg-white px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300" to={""}>
        Edit
    </Link>
    <button className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300">
    <svg className="w-4 h-4 mr-2" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.002 7L15.2797 0V4C5.55751 5 1.39084 10 0.00195312 15C3.47418 11.5 8.33529 9.9 15.2797 9.9V14L25.002 7Z" fill="#111111"/>
    </svg>
        Share product
    </button>
</div>


        </div>
    );
}


function StatisticsPanel({ totalIncome, views, orders }) {
    return (
        <div className="col-span-1 pl-8">
            <StatCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 16 16">
                <path fill="black" d="M12.32 8a3 3 0 0 0-2-.7H5.63A1.59 1.59 0 0 1 4 5.69a2 2 0 0 1 0-.25a1.59 1.59 0 0 1 1.63-1.33h4.62a1.59 1.59 0 0 1 1.57 1.33h1.5a3.08 3.08 0 0 0-3.07-2.83H8.67V.31H7.42v2.3H5.63a3.08 3.08 0 0 0-3.07 2.83a2.09 2.09 0 0 0 0 .25a3.07 3.07 0 0 0 3.07 3.07h4.74A1.59 1.59 0 0 1 12 10.35a1.86 1.86 0 0 1 0 .34a1.59 1.59 0 0 1-1.55 1.24h-4.7a1.59 1.59 0 0 1-1.55-1.24H2.69a3.08 3.08 0 0 0 3.06 2.73h1.67v2.27h1.25v-2.27h1.7a3.08 3.08 0 0 0 3.06-2.73v-.34A3.06 3.06 0 0 0 12.32 8"></path>
            </svg>} title="Sales" value={totalIncome} />
            <StatCard icon={<svg className="w-4 h-4 mr-2" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 21.875C19.9162 21.875 21.875 19.9162 21.875 17.5C21.875 15.0838 19.9162 13.125 17.5 13.125C15.0838 13.125 13.125 15.0838 13.125 17.5C13.125 19.9162 15.0838 21.875 17.5 21.875Z" fill="#111111"/>
                <path d="M33.8402 17.1281C32.5537 13.8006 30.3205 10.9229 27.4163 8.85072C24.5122 6.77858 21.0646 5.60281 17.4995 5.46875C13.9345 5.60281 10.4868 6.77858 7.58272 8.85072C4.67861 10.9229 2.44534 13.8006 1.15891 17.1281C1.07203 17.3684 1.07203 17.6316 1.15891 17.8719C2.44534 21.1994 4.67861 24.0771 7.58272 26.1493C10.4868 28.2214 13.9345 29.3972 17.4995 29.5312C21.0646 29.3972 24.5122 28.2214 27.4163 26.1493C30.3205 24.0771 32.5537 21.1994 33.8402 17.8719C33.927 17.6316 33.927 17.3684 33.8402 17.1281ZM17.4995 24.6094C16.0934 24.6094 14.7189 24.1924 13.5498 23.4112C12.3806 22.63 11.4694 21.5197 10.9313 20.2206C10.3932 18.9216 10.2524 17.4921 10.5268 16.113C10.8011 14.7339 11.4782 13.4672 12.4724 12.4729C13.4667 11.4786 14.7335 10.8015 16.1126 10.5272C17.4916 10.2529 18.9211 10.3937 20.2202 10.9318C21.5192 11.4699 22.6296 12.3811 23.4108 13.5502C24.192 14.7194 24.6089 16.0939 24.6089 17.5C24.606 19.3846 23.8561 21.1913 22.5234 22.5239C21.1908 23.8565 19.3842 24.6065 17.4995 24.6094Z" fill="#111111"/>
                </svg>} title="Views" value={`${views} Views`} />
            <StatCard icon={<svg className="w-4 h-4 mr-2" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_63_26)">
                        <path d="M30 8.28571V6.14286H26.7857V4H24.6429V6.14286H23.5714C22.3896 6.14286 21.4286 7.105 21.4286 8.28571V10.4286C21.4286 11.6104 22.3896 12.5714 23.5714 12.5714H27.8571V14.7143H21.4286V16.8571H24.6429V19H26.7857V16.8571H27.8571C29.0389 16.8571 30 15.8961 30 14.7143V12.5714C30 11.3907 29.0389 10.4286 27.8571 10.4286H23.5714V8.28571H30ZM23.5714 23.2857V25.4286H26.3421L22.5 29.2707L20.0443 26.8139C19.8437 26.6132 19.5716 26.5003 19.2879 26.5H19.2857C19.1452 26.5 19.006 26.5277 18.8762 26.5816C18.7464 26.6355 18.6285 26.7144 18.5293 26.8139L12.8571 32.485L14.3721 34L19.2868 29.0864L21.7425 31.5432C21.9434 31.7441 22.2159 31.8569 22.5 31.8569C22.7841 31.8569 23.0566 31.7441 23.2575 31.5432L27.8571 26.9436V29.7143H30V23.2857H23.5714ZM2.14286 34H0V28.6429C0 24.5071 3.36429 21.1429 7.5 21.1429H13.9286C16.0596 21.1429 18.0964 22.0536 19.5182 23.6425L17.9218 25.0718C17.419 24.5103 16.8035 24.0611 16.1155 23.7533C15.4274 23.4456 14.6823 23.2863 13.9286 23.2857H7.5C4.54607 23.2857 2.14286 25.6889 2.14286 28.6429V34ZM10.7143 19C12.7034 19 14.6111 18.2098 16.0176 16.8033C17.4241 15.3968 18.2143 13.4891 18.2143 11.5C18.2143 9.51088 17.4241 7.60322 16.0176 6.1967C14.6111 4.79018 12.7034 4 10.7143 4C8.72516 4 6.81751 4.79018 5.41098 6.1967C4.00446 7.60322 3.21429 9.51088 3.21429 11.5C3.21429 13.4891 4.00446 15.3968 5.41098 16.8033C6.81751 18.2098 8.72516 19 10.7143 19ZM10.7143 6.14286C12.1351 6.14286 13.4977 6.70727 14.5024 7.71193C15.507 8.71659 16.0714 10.0792 16.0714 11.5C16.0714 12.9208 15.507 14.2834 14.5024 15.2881C13.4977 16.2927 12.1351 16.8571 10.7143 16.8571C9.29348 16.8571 7.93087 16.2927 6.92621 15.2881C5.92155 14.2834 5.35714 12.9208 5.35714 11.5C5.35714 10.0792 5.92155 8.71659 6.92621 7.71193C7.93087 6.70727 9.29348 6.14286 10.7143 6.14286Z" fill="black"/></g>
                        <defs>
                        <clipPath id="clip0_63_26">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>} title="Orders" value={`${orders} Orders`} />
        </div>
    );
}


function StatCard({ icon, title, value }) {
    return (
        <div className={`${CONTAINERCARD} w-75 h-36 rounded-lg border border-double border-gray-200 p-4 mb-4 font-semibold`}>
            <div className="flex justify-between items-center pb-1 border-b border-black mb-2">
                <div className="flex items-center"> {/* Flex container for icon and title */}
                    {icon}
                    <h3 className="font-semibold whitespace-no-wrap">{title}</h3>
                </div>
                <a href="#" className={`${LINK_GRAY} text-sm pl-10`}>Learn more →</a>
            </div>
            <p className="text-3xl text-center pt-4">{value}</p>
        </div>
    );
}





function TransactionSettings() {
    return (
        <div className={`mt-6 ${CONTAINER} h-36 rounded-lg border border-double border-gray-200 p-4 mb-4 font-semibold`}>
            <div className="flex justify-between items-center pb-1 border-b border-black mb-2">
            <div className="flex items-center"> {/* Flex container for icon and title */}
            <svg className="w-4 h-4 mr-2" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.7083 0H13.125C11.9647 0 10.8519 0.460936 10.0314 1.28141C9.21094 2.10188 8.75 3.21468 8.75 4.375V14.5833C8.75 15.7437 9.21094 16.8565 10.0314 17.6769C10.8519 18.4974 11.9647 18.9583 13.125 18.9583H27.7083C28.8687 18.9583 29.9815 18.4974 30.8019 17.6769C31.6224 16.8565 32.0833 15.7437 32.0833 14.5833V4.375C32.0833 3.21468 31.6224 2.10188 30.8019 1.28141C29.9815 0.460936 28.8687 0 27.7083 0ZM29.1667 14.5833C29.1667 14.9701 29.013 15.341 28.7395 15.6145C28.466 15.888 28.0951 16.0417 27.7083 16.0417H13.125C12.7382 16.0417 12.3673 15.888 12.0938 15.6145C11.8203 15.341 11.6667 14.9701 11.6667 14.5833V4.375C11.6667 3.98823 11.8203 3.61729 12.0938 3.3438C12.3673 3.07031 12.7382 2.91667 13.125 2.91667H27.7083C28.0951 2.91667 28.466 3.07031 28.7395 3.3438C29.013 3.61729 29.1667 3.98823 29.1667 4.375V14.5833ZM24.0625 8.75C23.5226 8.75183 23.0027 8.95458 22.6042 9.31875C22.2906 9.03372 21.9009 8.84591 21.4826 8.77815C21.0643 8.71039 20.6353 8.76559 20.2478 8.93704C19.8603 9.1085 19.5309 9.38882 19.2996 9.74395C19.0684 10.0991 18.9453 10.5137 18.9453 10.9375C18.9453 11.3613 19.0684 11.7759 19.2996 12.131C19.5309 12.4862 19.8603 12.7665 20.2478 12.938C20.6353 13.1094 21.0643 13.1646 21.4826 13.0969C21.9009 13.0291 22.2906 12.8413 22.6042 12.5563C22.8675 12.7956 23.1853 12.9671 23.5299 13.0558C23.8745 13.1446 24.2356 13.1479 24.5818 13.0655C24.928 12.9832 25.2489 12.8176 25.5166 12.5831C25.7843 12.3487 25.9908 12.0524 26.1182 11.7201C26.2455 11.3878 26.2898 11.0294 26.2473 10.6761C26.2048 10.3228 26.0767 9.98517 25.8742 9.69255C25.6716 9.39993 25.4008 9.16114 25.0851 8.99689C24.7694 8.83264 24.4184 8.74789 24.0625 8.75ZM21.875 21.875C21.4882 21.875 21.1173 22.0286 20.8438 22.3021C20.5703 22.5756 20.4167 22.9466 20.4167 23.3333V24.7917C20.4167 25.1784 20.263 25.5494 19.9895 25.8229C19.716 26.0964 19.3451 26.25 18.9583 26.25H4.375C3.98823 26.25 3.61729 26.0964 3.3438 25.8229C3.07031 25.5494 2.91667 25.1784 2.91667 24.7917V18.9583H4.375C4.76177 18.9583 5.13271 18.8047 5.4062 18.5312C5.67969 18.2577 5.83333 17.8868 5.83333 17.5C5.83333 17.1132 5.67969 16.7423 5.4062 16.4688C5.13271 16.1953 4.76177 16.0417 4.375 16.0417H2.91667V14.5833C2.91667 14.1966 3.07031 13.8256 3.3438 13.5521C3.61729 13.2786 3.98823 13.125 4.375 13.125C4.76177 13.125 5.13271 12.9714 5.4062 12.6979C5.67969 12.4244 5.83333 12.0534 5.83333 11.6667C5.83333 11.2799 5.67969 10.909 5.4062 10.6355C5.13271 10.362 4.76177 10.2083 4.375 10.2083C3.21468 10.2083 2.10188 10.6693 1.28141 11.4897C0.460936 12.3102 0 13.423 0 14.5833V24.7917C0 25.952 0.460936 27.0648 1.28141 27.8853C2.10188 28.7057 3.21468 29.1667 4.375 29.1667H18.9583C20.1187 29.1667 21.2315 28.7057 22.0519 27.8853C22.8724 27.0648 23.3333 25.952 23.3333 24.7917V23.3333C23.3333 22.9466 23.1797 22.5756 22.9062 22.3021C22.6327 22.0286 22.2618 21.875 21.875 21.875ZM7.29167 23.3333H8.75C9.13677 23.3333 9.50771 23.1797 9.7812 22.9062C10.0547 22.6327 10.2083 22.2618 10.2083 21.875C10.2083 21.4882 10.0547 21.1173 9.7812 20.8438C9.50771 20.5703 9.13677 20.4167 8.75 20.4167H7.29167C6.90489 20.4167 6.53396 20.5703 6.26047 20.8438C5.98698 21.1173 5.83333 21.4882 5.83333 21.875C5.83333 22.2618 5.98698 22.6327 6.26047 22.9062C6.53396 23.1797 6.90489 23.3333 7.29167 23.3333Z" fill="#111111"/>
            </svg>
            <h2 className="font-semibold whitespace-no-wrap">Transactions Settings</h2>
            </div>
            <a href="#" className={`${LINK_GRAY} text-sm pl-10`}>Learn more →</a>
            </div>
            <p className="text-1xl text-center pt-4 text-gray-500">There hasn't been any transactions yet for your products.</p>
        </div>
    );
}

function YourStore() {
    return (
        <div className={`mt-6 ${CONTAINERCARD} w-65 h-36  rounded-lg border border-double border-gray-200 p-4 mb-4 font-semibold`}>
            <div className="flex justify-between items-center pb-1 border-b border-black mb-2">
            <div className="flex items-center"> {/* Flex container for icon and title */}
            <svg className="w-4 h-4 mr-2" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66667 3.75V0H28.3333V3.75H1.66667ZM1.66667 30V18.75H0V15L1.66667 5.625H28.3333L30 15V18.75H28.3333V30H25V18.75H18.3333V30H1.66667ZM5 26.25H15V18.75H5V26.25Z" fill="black"/>
            </svg>
            </div>
            <h2 className="font-semibold whitespace-no-wrap">Your Store</h2>
            <a href="https://ecomworld.com/yourstore" className={`${LINK_GRAY} text-sm pl-10`}>Learn more →</a>
            </div>
            <a href="https://ecomworld.com/yourstore"><p className="text-1xl text-center pt-4 text-gray-500">https://ecomworld.com/yourstore</p></a>
            
        </div>
    );
}

