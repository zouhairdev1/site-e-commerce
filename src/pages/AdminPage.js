import React from 'react';

export default function Admin  (){
  const users = [
    { email: 'utilisateur@gmail.com', firstName: 'First Name', lastName: 'Last Name' },
    { email: 'utilisateur@gmail.com', firstName: 'First Name', lastName: 'Last Name' },
    { email: 'utilisateur@gmail.com', firstName: 'First Name', lastName: 'Last Name' },
    { email: 'utilisateur@gmail.com', firstName: 'First Name', lastName: 'Last Name' },
    { email: 'utilisateur@gmail.com', firstName: 'First Name', lastName: 'Last Name' },
  ];

  const products = [
    { name: "MEN'S PANTS by ZARA", views: 1, orders: 0, sales: 0.00 },
    { name: 'APPEL WATCH SERIES 7', views: 1, orders: 0, sales: 0.00 },
    { name: 'T-SHIRT TEXTURE BY ZARA', views: 1, orders: 0, sales: 0.00 },
    { name: "MEN'S SHOES", views: 1, orders: 0, sales: 0.00 },
    { name: 'APPEL WATCH SERIES 8', views: 1, orders: 0, sales: 0.00 },
  ];

  const onlineUsers = 179;
  const offlineUsers = 419;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
        </div>

        <div className="flex space-x-4">
          {/* Users Section */}
          <div className="w-2/3 bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_162_376)">
            <path d="M11.248 0C12.9057 0 14.4954 0.65848 15.6675 1.83058C16.8396 3.00269 17.498 4.5924 17.498 6.25C17.498 7.9076 16.8396 9.49732 15.6675 10.6694C14.4954 11.8415 12.9057 12.5 11.248 12.5C9.59044 12.5 8.00073 11.8415 6.82863 10.6694C5.65653 9.49732 4.99805 7.9076 4.99805 6.25C4.99805 4.5924 5.65653 3.00269 6.82863 1.83058C8.00073 0.65848 9.59044 0 11.248 0ZM39.998 0C41.6557 0 43.2454 0.65848 44.4175 1.83058C45.5896 3.00269 46.248 4.5924 46.248 6.25C46.248 7.9076 45.5896 9.49732 44.4175 10.6694C43.2454 11.8415 41.6557 12.5 39.998 12.5C38.3404 12.5 36.7507 11.8415 35.5786 10.6694C34.4065 9.49732 33.748 7.9076 33.748 6.25C33.748 4.5924 34.4065 3.00269 35.5786 1.83058C36.7507 0.65848 38.3404 0 39.998 0ZM-0.00195312 23.3359C-0.00195312 18.7344 3.73242 15 8.33398 15H11.6699C12.9121 15 14.0918 15.2734 15.1543 15.7578C15.0527 16.3203 15.0059 16.9062 15.0059 17.5C15.0059 20.4844 16.3184 23.1641 18.3887 25H1.66211C0.748047 25 -0.00195312 24.25 -0.00195312 23.3359ZM31.6621 25H31.6074C33.6855 23.1641 34.9902 20.4844 34.9902 17.5C34.9902 16.9062 34.9355 16.3281 34.8418 15.7578C35.9043 15.2656 37.084 15 38.3262 15H41.6621C46.2637 15 49.998 18.7344 49.998 23.3359C49.998 24.2578 49.248 25 48.334 25H31.6621ZM17.498 17.5C17.498 15.5109 18.2882 13.6032 19.6947 12.1967C21.1013 10.7902 23.0089 10 24.998 10C26.9872 10 28.8948 10.7902 30.3013 12.1967C31.7079 13.6032 32.498 15.5109 32.498 17.5C32.498 19.4891 31.7079 21.3968 30.3013 22.8033C28.8948 24.2098 26.9872 25 24.998 25C23.0089 25 21.1013 24.2098 19.6947 22.8033C18.2882 21.3968 17.498 19.4891 17.498 17.5ZM9.99805 37.9141C9.99805 32.1641 14.6621 27.5 20.4121 27.5H29.584C35.334 27.5 39.998 32.1641 39.998 37.9141C39.998 39.0625 39.0684 40 37.9121 40H12.084C10.9355 40 9.99805 39.0703 9.99805 37.9141Z" fill="#111111"/>
            </g>
            <defs>
            <clipPath id="clip0_162_376">
            <rect width="50" height="40" fill="white" transform="translate(-0.00195312)"/>
            </clipPath>
            </defs>
            </svg>
            <h2 className="text-xl font-semibold mr-auto">Users</h2>
            </div>
            <div className="space-y-4">
              {users.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-2 border-b">
                  <div className="flex items-center">
                    <img 
                      src={`https://i.pravatar.cc/40?img=${index + 1}`} 
                      alt="User Avatar" 
                      className="rounded-full w-10 h-10 mr-4"
                    />
                    <div>
                      <p>{user.email}</p>
                      <p>{user.firstName} {user.lastName}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300">Detail</button>
                    <button className="flex items-center justify-center text-white rounded-lg border border-gray-300 bg-red-500 px-4 py-2 hover:bg-red-900 hover:text-white transition-colors duration-300">
    <svg className="w-4 h-4 mr-2" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15714 3.75V1.875H10.0429V3.75H5.15714ZM3.52857 3.75V1.25C3.52857 0.918479 3.64296 0.600537 3.84657 0.366117C4.05018 0.131696 4.32634 0 4.61429 0L10.5857 0C10.8737 0 11.1498 0.131696 11.3534 0.366117C11.557 0.600537 11.6714 0.918479 11.6714 1.25V3.75H14.3857C14.6017 3.75 14.8088 3.84877 14.9615 4.02459C15.1142 4.2004 15.2 4.43886 15.2 4.6875C15.2 4.93614 15.1142 5.1746 14.9615 5.35041C14.8088 5.52623 14.6017 5.625 14.3857 5.625H13.9894L13.1827 17.6912C13.1409 18.3193 12.8946 18.906 12.4933 19.3341C12.0919 19.7621 11.5649 20 11.0178 20H4.18217C3.63505 20 3.10812 19.7621 2.70673 19.3341C2.30535 18.906 2.05911 18.3193 2.01726 17.6912L1.21057 5.625H0.814286C0.598324 5.625 0.391207 5.52623 0.238499 5.35041C0.0857906 5.1746 0 4.93614 0 4.6875C0 4.43886 0.0857906 4.2004 0.238499 4.02459C0.391207 3.84877 0.598324 3.75 0.814286 3.75H3.52857ZM2.84457 5.625H12.3554L11.5585 17.5475C11.5481 17.7045 11.4867 17.8511 11.3864 17.9582C11.2862 18.0653 11.1546 18.1248 11.0178 18.125H4.18217C4.04544 18.1248 3.91381 18.0653 3.81357 17.9582C3.71333 17.8511 3.65188 17.7045 3.64149 17.5475L2.84457 5.625Z" fill="white"/>
    </svg>
        Remove
    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
            <button className="text-gray-500">Manage all Users →</button>
            </div>
          </div>

          {/* Products Section */}
          <div className="w-1/3 bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 1024 1024">
                <path fill="black" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z" />
                <path fill="black" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z" />
            </svg>
            <h2 className="text-xl font-semibold mr-auto">Top Products</h2>
            </div>
            <div className="space-y-4">
              {products.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-2 border-b">
                  <img 
                    src={`https://via.placeholder.com/50?text=Img${index + 1}`} 
                    alt="Product Image" 
                    className="w-10 h-10 mr-4 rounded-lg"
                  />
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p>{product.views} views, {product.orders} orders, ${product.sales.toFixed(2)} sales</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
            <button className="text-gray-500">Manage all products →</button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-4 rounded-lg shadow h-40">
          <div className="flex justify-between items-center">
          </div>
          <div className="mt-4 flex space-x-2">
            <div className="bg-black h-4 rounded-full" style={{ width: '60%' }}></div>
            <div className="bg-gray-500 h-4 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <div className="flex justify-between mt-6">
          <div className="bg-black h-1 rounded-full" style={{ width: '3%' }}>
          <div className="flex justify-between mt-2">
            <p>Online {onlineUsers} users</p></div>
            </div>
            <div className="bg-gray-500 h-1 rounded-full" style={{ width: '3%' }}>
            <div className="flex justify-between mt-2">
            <p>Offline {offlineUsers} users</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

