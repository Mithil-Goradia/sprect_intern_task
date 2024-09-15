export default function Home() {
  return (
    <div>
      {/* Page 1 */}
      <div className="flex justify-center pt-12 bg-gray-200 pb-40">
      <div className="flex justify-center relative w-full px-5 md:px-0">
        <div className="flex flex-col gap-4 items-start"> {/* Align items to the start */}
          <p className="text-3xl pb-7 text-gray-800 font-extrabold">why us</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col p-4 bg-white rounded-3xl w-full max-w-[270px] mx-auto">
              <img src="https://sprect.com/assets/images/nopayment.svg" className="w-[50px] mx-auto" />
              <p className="text-xl font-bold mt-5 text-center">0 platform fee*</p>
              <ul className="text-gray-500 list-disc ml-5 mt-3 text-center">
                <li>yes you heard that right</li>
                <li>no added burden to your connections</li>
              </ul>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-3xl w-full max-w-[270px] mx-auto lg:relative lg:top-[30%]">
              <img src="https://sprect.com/assets/images/sheild-done.svg" className="w-[50px] mx-auto" />
              <p className="text-xl font-bold mt-5 text-center">end-to-end encryption</p>
              <ul className="text-gray-500 list-disc ml-5 mt-3 text-center">
                <li>not even sprect can hear you!</li>
                <li>your own private room</li>
              </ul>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-3xl w-full max-w-[270px] mx-auto lg:relative lg:top-[60%]">
              <img src="https://sprect.com/assets/images/pro-set.svg" className="w-[50px] mx-auto" />
              <p className="text-xl font-bold mt-5 text-center">quick dispute fixes</p>
              <ul className="text-gray-500 list-disc ml-5 mt-3 text-center">
                <li>PRO payments held for 48 hours</li>
                <li>let us know if something didn't work</li>
              </ul>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-3xl w-full max-w-[270px] mx-auto">
              <img src="https://sprect.com/assets/images/directory.svg" className="w-[40px] mx-auto" />
              <p className="text-xl font-bold mt-5 text-center">expansive directory</p>
              <ul className="text-gray-500 list-disc ml-5 mt-3 text-center">
                <li>reach PROs across industries</li>
                <li>can't find someone? let us know</li>
              </ul>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-3xl w-full max-w-[270px] mx-auto lg:relative lg:top-[30%]">
              <img src="https://sprect.com/assets/images/iconvideo.svg" className="w-[40px] mx-auto" />
              <p className="text-xl font-bold mt-5 text-center">flexible meets</p>
              <ul className="text-gray-500 list-disc ml-5 mt-3 text-center">
                <li>10 min meet-n-greet</li>
                <li>or pick your choice of duration</li>
              </ul>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-3xl w-full max-w-[270px] mx-auto lg:relative lg:top-[60%]">
              <img src="https://sprect.com/assets/images/securepayments.svg" className="w-[40px] mx-auto" />
              <p className="text-xl font-bold mt-5 text-center">secure payments</p>
              <ul className="text-gray-500 list-disc ml-5 mt-3 text-center">
                <li>industry standard payment security</li>
                <li>automatic refunds on cancellations</li>
              </ul>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-3xl w-full max-w-[270px] mx-auto">
              <img src="https://sprect.com/assets/images/language.svg" className="w-[40px] mx-auto" />
              <p className="text-xl font-bold mt-5 text-center">speak your language</p>
              <ul className="text-gray-500 list-disc ml-5 mt-3 text-center">
                <li>PROs speak your native language</li>
                <li>English, Gujarati, Hindi, Tamil & more</li>
              </ul>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-3xl w-full max-w-[270px] mx-auto lg:relative lg:top-[30%]">
              <img src="https://sprect.com/assets/images/open_in_browser.svg" className="w-[40px] mx-auto" />
              <p className="text-xl font-bold mt-5 text-center">meet in browser</p>
              <ul className="text-gray-500 list-disc ml-5 mt-3 text-center">
                <li>meet directly in browser</li>
                <li>no app to download</li>
              </ul>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-3xl w-full max-w-[270px] mx-auto lg:relative lg:top-[60%]">
              <img src="https://sprect.com/assets/images/thumb_up_alt.svg" className="w-[40px] mx-auto" />
              <p className="text-xl font-bold mt-5 text-center">no commitments</p>
              <ul className="text-gray-500 list-disc ml-5 mt-3 text-center">
                <li>pay as you go</li>
                <li>no lock-ins or long term contracts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      </div>

      {/* Page 2 */}
      <div className="flex flex-col items-center pt-10 px-5 pb-20">
        <p className="text-3xl pb-7 text-gray-800 font-extrabold text-center">how is it done</p>
        <div className="w-full md:w-[70%]">
          <div className="flex flex-col gap-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Hidden on small screens, visible on medium and larger */}
              <img src="https://sprect.com/assets/images/search1.svg" className="hidden md:block w-[270px] mx-auto" />
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-orange-500 w-[50px] h-[50px] flex items-center justify-center font-extrabold text-3xl text-white">1</div>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 p-5 bg-gray-100 rounded-[22px] w-full md:w-[300px] shadow-md shadow-black/20">
                {/* Image visible on small screens */}
                <img src="https://sprect.com/assets/images/search1.svg" className="block md:hidden w-[200px] mx-auto mb-3" />
                <p className="text-xl font-bold text-center">search</p>
                <p className="text-gray-500 mt-3 text-center">
                  find PRO's by name, skills, profession, or university and more.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Hidden on small screens, visible on medium and larger */}
              <img src="https://sprect.com/assets/images/search2.svg" className="hidden md:block w-[200px] mx-auto" />
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-orange-500 w-[50px] h-[50px] flex items-center justify-center font-extrabold text-3xl text-white">2</div>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 p-5 bg-gray-100 rounded-[22px] w-full md:w-[300px] shadow-md shadow-black/20">
                {/* Image visible on small screens */}
                <img src="https://sprect.com/assets/images/search2.svg" className="block md:hidden w-[200px] mx-auto mb-3" />
                <p className="text-xl font-bold text-center">schedule & pay</p>
                <p className="text-gray-500 mt-3 text-center">
                  pick your preferred date/time/duration and make PROs payment. We'll remind you before the meeting.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Hidden on small screens, visible on medium and larger */}
              <img src="https://sprect.com/assets/images/search3.svg" className="hidden md:block w-[250px] mx-auto" />
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-orange-500 w-[50px] h-[50px] flex items-center justify-center font-extrabold text-3xl text-white">3</div>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 p-5 bg-gray-100 rounded-[22px] w-full md:w-[300px] shadow-md shadow-black/20">
                {/* Image visible on small screens */}
                <img src="https://sprect.com/assets/images/search3.svg" className="block md:hidden w-[200px] mx-auto mb-3" />
                <p className="text-xl font-bold text-center">super connect</p>
                <p className="text-gray-500 mt-3 text-center">
                  meet online at the scheduled time and video chat about anything you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 3 */}
      <div className="flex items-center justify-center bg-white p-10">
        <div className="flex flex-col lg:flex-row sm:gap-5 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-10 rounded-2xl w-full lg:w-[70%]">
          <img src="/image.png" className="rounded-full w-[110px] mx-auto lg:mx-0 lg:mr-5" />
          <div className="p-2 flex flex-col justify-center text-center lg:text-left">
            <p className="text-3xl font-extrabold text-white pb-5 lg:pb-2">ready to sprect? find your PRO today.</p>
            <button className="bg-gray-100 p-3 rounded-xl mx-auto lg:mx-0 w-[180px]">search for PROs</button>
          </div>
        </div>
      </div>

      {/*Page 4*/}
      <div className="bg-gray-100 flex justify-center">
        <div className="w-[70%] p-10 flex flex-col gap-2">
          <p className="font-extrabold text-3xl text-gray-800 mb-7">Our investor</p>
          <img src="https://sprect.com/assets/images/sidd.png" className="w-[230px] self-center"/>
          <p className="font-bold text-2xl text-gray-800 text-center">Siddarth Shetty</p>
          <p className="text-gray-500 text-center">chief business developement officer<br/>ServiceChannel (NYSE:FTV)</p>
        </div>
      </div>

      {/*Footer*/}
      <div className="bg-gradient-to-r from-slate-900 to-cyan-800 p-10 flex justify-center">
        <div className="w-full max-w-[1200px] p-10 flex flex-col gap-10">
          <img src="https://sprect.com/assets/images/logo_home.svg" className="w-[200px] mx-auto lg:mx-0" />
          <p className="text-white text-center lg:text-left">
            sprect is building a global community of people to connect you with<br />
            everyone quickly, easily and privately. join us in our mission to super<br />
            connect the world.
          </p>

          <div className="flex flex-col lg:flex-row gap-10 pb-10 border-b-2 border-solid border-gray-600 lg:gap-20">
            <div className="flex flex-col lg:w-1/3 gap-5 lg:gap-8">
              <p className="text-white font-extrabold text-3xl">stay updated. no spam.</p>
              <div className="flex flex-wrap p-1 border-2 border-solid border-gray-500 rounded-md">
                <input 
                  placeholder="enter the email address" 
                  type="email" 
                  className="bg-transparent border-none outline-none flex-1 pl-2 py-1 min-w-0" 
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-white rounded ml-2">
                  submit
                </button>
              </div>

            </div>

            <div className="flex flex-col lg:w-1/3 gap-5 lg:gap-8 lg:pl-8">
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <a className="text-white decoration-none">about</a>
                  <p className="text-gray-300">get to know us</p>
                </div>
                <div className="flex gap-2">
                  <a className="text-white decoration-none">careers</a>
                  <p className="text-gray-300">grow with us</p>
                </div>
                <div className="flex gap-2">
                  <a className="text-white decoration-none">blog</a>
                  <p className="text-gray-300">our opinion on stuff</p>
                </div>
                <div className="flex gap-2">
                  <a className="text-white decoration-none">contact</a>
                  <p className="text-gray-300">what's on your mind</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:w-1/3 gap-5 lg:gap-8 lg:pl-8">
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <a className="text-white decoration-none">press</a>
                  <p className="text-gray-300">what are we up to</p>
                </div>
                <div className="flex gap-2">
                  <a className="text-white decoration-none">news</a>
                  <p className="text-gray-300">we got covered</p>
                </div>
                <div className="flex gap-2">
                  <a className="text-white decoration-none">terms</a>
                  <p className="text-gray-300">long but important</p>
                </div>
                <div className="flex gap-2">
                  <a className="text-white decoration-none">privacy</a>
                  <p className="text-gray-300">private (ok, most private)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-5 lg:gap-10">
            <p className="text-white text-center lg:text-left">@ sprect</p>
            <p className="text-white text-center lg:text-left">made with love in India, for the world.</p>
            <div className="flex gap-2">
              <img src="/facebook (1).png" className="w-6 h-6" />
              <img src="/instagram.png" className="w-6 h-6" />
              <img src="/linkedin.png" className="w-6 h-6" />
              <img src="/twitter.png" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
 </div>
  );
}
