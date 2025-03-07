"use client";

import { AnimatedText } from "@/app/components/AnimatedText";
import {
  PackagePlus,
  Newspaper,
  Sparkle,
  PhoneCall,
  CopyPlus,
  CloudDownload,
  Cog,
} from "lucide-react";
import { Glow, GlowArea } from "@/app/components/Glow";

const Lorem = () => {
  return (
    <>
      <div className="flex flex-col max-w-4xl mx-auto">
        <h2 className="text-7xl mt-28 tracking-tighter starting:-translate-y-12 starting:opacity-0 transition-all delay-700 duration-1000">
          Camera Obscuras
        </h2>
        <AnimatedText
          classNames="prose prose-invert prose-lg prose-slate max-w-4xl mt-8 delay-700"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
        />
      </div>

      <div className="my-20">
        <GlowArea className="flex justify-center gap-8 starting:opacity-0 opacity-100 starting:-translate-y-12 transition-all duration-1000 delay-[2200ms]">
          <Glow className="rounded-xl">
            <div className="max-w-md border-2 border-slate-300/10 p-8 rounded-xl">
              <div className="mb-4 space-y-1">
                <h3 className="text-3xl font-semibold">Free Plan</h3>
                <p className="text-slate-300">($0 / month)</p>
                <p>
                  Kickstart your photography journey with essential resources,
                  tips, and a taste of professional insights.
                </p>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <PackagePlus size={26} />
                    <span className="text-slate-300">
                      1 digital preset pack
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Newspaper size={26} />
                    <span className="text-slate-300">
                      Monthly photography tips newsletter
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Sparkle size={26} />
                    <span className="text-slate-300">
                      Access to basic photography blog
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <PhoneCall size={26} />
                    <span className="text-slate-300">
                      1 free consultation call (15 minutes)
                    </span>
                  </li>
                </ul>
              </div>
              <button className="w-full bg-slate-100 text-black rounded-md mt-8 p-3 pointer-events-auto font-semibold">
                Subscribe
              </button>
            </div>
          </Glow>

          <Glow className="rounded-xl">
            <div className="max-w-md border-2 border-slate-300/10 p-8 rounded-xl">
              <div className="mb-4 space-y-1">
                <h3 className="text-3xl font-semibold">Pro Plan</h3>
                <p className="text-slate-300">($19.99 / month)</p>
                <p>
                  Unlock unlimited potential with comprehensive tools, advanced
                  tutorials, and exclusive access to transform your photography
                  skills.
                </p>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CopyPlus size={26} />
                    <span className="text-slate-300">
                      All Free Plan features
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <PackagePlus size={26} />
                    <span className="text-slate-300">
                      Full preset collection (12+ packs)
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CloudDownload size={26} />
                    <span className="text-slate-300">
                      Unlimited digital print downloads
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Cog size={26} />
                    <span className="text-slate-300">
                      Advanced editing tutorials
                    </span>
                  </li>
                </ul>
              </div>
              <button className="w-full bg-slate-100 text-black rounded-md mt-8 p-3 pointer-events-auto font-semibold">
                Subscribe
              </button>
            </div>
          </Glow>
        </GlowArea>
      </div>
    </>
  );
};

export default Lorem;
