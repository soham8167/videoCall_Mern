import React from 'react';
import './footer.css'
import Logo from "../Images/logo.png"
const Foooter = () => {
  return (
    <footer className="bg-neutral-800 text-center text-surface/7 text-white/75 lg:text-left">
      <div className="flex items-center justify-center p-2 border-white/10">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a href="#!" className="me-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 320 512"
              className="h-4 w-4 hover:text-blue-500"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </a>
          <a href="#!" className="me-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
              className="h-4 w-4 hover:text-blue-500"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
          <a href="#!" className="me-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 488 512"
              className="h-4 w-4 hover:text-blue-500"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </a>
          <a href="#!" className="me-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
              className="h-4 w-4 hover:text-blue-500"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a href="#!" className="me-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512"
              className="h-4 w-4 hover:text-blue-500"
            >
             <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.5 1.6-15.2 0 0 25.2 2.1 39.2 26 22.8 39.7 61.4 28.1 75.4 21.4 2.3-16.5 8.8-27.5 15.8-34.1-55.5-6.2-114.1-11.6-114.1-116 0-28.6 10.3-51.9 27-70.2-2.6-6.4-11.8-33.4 2.6-67.7 0 0 21.5-6.8 70.4 26.2 20.4-5.7 42.2-8.6 63.8-8.7 21.5 .1 43.4 3 63.8 8.7 48.8-33 70.4-26.2 70.4-26.2 14.5 34.3 5.2 61.3 2.6 67.7 16.7 18.4 27 41.7 27 70.2 0 104.6-59 109.8-114.6 116 9 7.3 17 21.3 17 43v63.8c0 6.4 4.8 14.4 17.3 12.1 99.8-33.4 169.6-128.3 169.6-239.2C496 113.3 389.9 8 244.8 8zM372 256c0 2.9-1.5 5.7-4.3 7.3-2.9 1.7-5.9 1.2-8.5-1.2-2.7-2.9-3.3-7.1-1.5-10.6 2.2-4.5 7.8-6.3 12-4.3 4.2 1.9 6.7 6.7 5 11.2-1.7 4.8-6.4 7.5-11.3 6.1-4.9-1.3-8.3-5.8-8.3-10.8 0-6.2 5.1-11.2 11.2-11.2 6.2 0 11.2 5 11.2 11.2 0 4.7-2.9 8.7-7.1 10.3 .9 5.7 5.9 9.7 11.7 8.7 5.7-1 9.7-5.9 8.7-11.7-2.4-13.3-13.7-22.6-27.2-22.6-15 0-27.2 12.2-27.2 27.2 0 14.1 10.9 25.6 24.4 27.1 .5 .1 1 .1 1.5 .1 3.6 .1 7-1.5 9.5-4.2 2.6-2.7 4.1-6.3 4.1-10.2c0-3.9-1.5-7.5-4.1-10.2-2.5-2.6-5.9-4.2-9.5-4.2-3.6 0-7 1.5-9.5 4.2-1.3 1.3-2.3 2.8-3.1 4.5-1.5 .3-2.8 1.4-3.5 2.7-1.1 2.2-2.6 4.1-4.6 5.5-5.3 3.1-11.6 .9-14.6-4.3-1.4-2.5-1.8-5.7-1-8.6 .5-1.8 1.4-3.4 2.6-4.8 1.2-1.4 2.7-2.5 4.5-3.2 4.4-1.7 10.2-1 14.4 1.4 2.4 1.4 4.1 3.4 5.4 5.7 1.4 2.4 2.1 5.2 2.1 8 .1 6.8-3.7 13-9.5 16.1z" />
            </svg>
          </a>
        </div>
       
      </div>
      <div className='pb-2 flex justify-center'>
        © 2024 Copyright:MeetUp<img src={Logo} alt='logo' className='h-6' />
        </div>

      {/* <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              TW Elements
            </h6>
            <p className='Here text-start'>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Products</h6>
            <p className="angular mb-4 flex justify-start"><a href="#!">Angular</a></p>
            <p className="react mb-4 flex justify-start"><a href="#!">React</a></p>
            <p className="vue mb-4 flex justify-start"><a href="#!">Vue</a></p>
            <p className='laravel flex justify-start'><a href="#!">Laravel</a></p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Useful links</h6>
            <p className="pricing mb-4 flex justify-start"><a href="#!">Pricing</a></p>
            <p className="setting mb-4 flex justify-start"><a href="#!">Settings</a></p>
            <p className="orders mb-4 flex justify-start"><a href="#!">Orders</a></p>
            <p className='help flex justify-start'><a href="#!">Help</a></p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198c.031-.028.061-.056.091-.086l8.159-8.159c.511-.511 1.41-.512 1.921 0z" />
                </svg>
              </span>
              2020 XYZ Pte. Ltd.
            </p>
            <p className="mb-4 text-start">info@example.com</p>
            <p className='Here text-start'>+1 234 5678</p>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Foooter;
