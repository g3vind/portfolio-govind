import React from "react";

export default function Footer() {
  return (
    <section className="relative overflow-hidden py-2 mb-5 mt-28">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-center">
          {" "}
          {/* Centering icons */}
          <div className="w-auto p-8">
            <div className="-m-1.5 flex items-center justify-center flex-wrap">
              {/* GitHub */}
              <div className="items-center w-auto p-1.5">
                <a href="https://github.com/g3vind" target="_blank">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C5.383 0 0 5.384 0 12c0 5.305 3.438 9.8 8.207 11.385.6.11.793-.261.793-.577v-2.006c-3.338.725-4.033-1.582-4.033-1.582-.546-1.39-1.334-1.756-1.334-1.756-1.09-.744.083-.729.083-.729 1.206.085 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.305 3.495.996.108-.777.419-1.305.762-1.605-2.67-.303-5.467-1.335-5.467-5.93 0-1.311.469-2.383 1.236-3.224-.124-.303-.536-1.525.117-3.176 0 0 1.006-.322 3.3 1.23a11.524 11.524 0 0 1 3-.405 11.497 11.497 0 0 1 3 .405c2.293-1.552 3.298-1.23 3.298-1.23.653 1.65.242 2.872.118 3.176.77.841 1.236 1.913 1.236 3.224 0 4.609-2.8 5.623-5.477 5.922.429.372.814 1.1.814 2.215v3.293c0 .319.192.692.8.575C20.566 21.8 24 17.304 24 12c0-6.616-5.384-12-12-12z"
                        fill="#27272A"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              {/* LinkedIn */}
              <div className="items-center w-auto p-1.5">
                <a
                  href="https://www.linkedin.com/in/your-linkedin-username"
                  target="_blank"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM4 5C4 4.44772 4.44772 4 5 4C5.55228 4 6 4.44772 6 5C6 5.55228 5.55228 6 5 6C4.44772 6 4 5.55228 4 5ZM4 8H6V18H4V8ZM8 8H10V18H8V8ZM16 8H14V18H16V8ZM20 18V10C20 8.89543 19.1046 8 18 8H16V18H18V14C18 13.4477 18.4477 13 19 13C19.5523 13 20 13.4477 20 14V18Z"
                        fill="#27272A"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="https://twitter.com/g3vind" target="_blank">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                        fill="#27272A"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: "19px" }} className="p-2 text-center font-medium">
          Made By{" "}
          <a href="https://www.linkedin.com/in/g3vind/" className="text-bold">
            <span className="text-orange-500 font-semibold">Govind Kumar</span>
          </a>{" "}
          with 🖤
        </p>
      </div>
    </section>
  );
}
