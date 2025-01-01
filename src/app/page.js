import Image from "next/image";
import TypingEffect from '../components/TypingEffect';

export default function Home() {
  return (
    <div>
    <div className="body-container">
      <div className="h-8" />
      <div className="flex justify-between items-end w-full max-w-full">
        <h1 className="name">hello, i'm asya!</h1>
      </div>
      
      <table className="home-horizontal-only">
        <tbody>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 ml-0" style={{marginTop: "30px"}}>
            <div className="grid auto-rows-auto gap-6">
                  <div className="relative group overflow-hidden">
                    <a href="/food-truck-paradise">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./foodtruckparadisecarousel.png"
                          alt="Food Truck Paradise"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative group overflow-hidden">
                    <a href="/yale_ims">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./yaleimsoverview.png"
                          alt="Yale IMS Overview"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative group overflow-hidden">
                    <a href="/wired">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./wiredcarousel.png"
                          alt="Yale IMS Overview"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative group overflow-hidden">
                    <a href="/hands">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./hands2.png"
                          alt="Yale IMS Overview"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="grid auto-rows-auto gap-6 content-start">
                  <div className="relative group overflow-hidden">
                    <a href="/mongooses">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./mongooses.jpg"
                          alt="Food Truck Paradise"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative group overflow-hidden">
                    <a href="/tangerine">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./tangerinecarousel.png"
                          alt="Food Truck Paradise"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative group overflow-hidden">
                    <a href="/still-lifes">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./stilllife1.png"
                          alt="Food Truck Paradise"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
           
                <div className="grid auto-rows-auto gap-6 content-start">
                  <div className="relative group overflow-hidden">
                    <a href="/cruise-ships">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./cruiseships6.jpg"
                          alt="Food Truck Paradise"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative group overflow-hidden">
                    <a href="/sdh">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./sdhlogo.png"
                          alt="Food Truck Paradise"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative group overflow-hidden">
                    <a href="/portraits">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./portrait3.png"
                          alt="Food Truck Paradise"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative group overflow-hidden">
                    <a href="/justine">
                      <div className="relative">
                        <img
                          className="w-full group-hover:opacity-75 transition-opacity duration-300 rounded-none"
                          src="./justine.png"
                          alt="Food Truck Paradise"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
           
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
}