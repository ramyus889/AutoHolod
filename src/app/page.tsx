"use client";
import { BsWhatsapp } from "react-icons/bs";

import { FaMapMarker } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import UserMap from "./components/UserMap";
import AOS from "aos";
import "aos/dist/aos.css";
import { BorderBeam } from "./components/ui/border-beam";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/react";

export default function Home() {
  const LazyMap = dynamic(() => import("./components/UserMap"), {
    ssr: false,
    loading: () => <Skeleton className="h-[500px] w-full" />,
  });
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className=" ">
      <div className="mb-3  mt-5 flex place-content-center px-5 ">
        <div
          data-aos="fade-up"
          className="relative w-full rounded-[24px] border border-slate-700   sm:mx-auto sm:max-w-xl"
        >
          <div className="relative mx-8 rounded-3xl   py-5 shadow sm:p-10 sm:py-5 md:mx-0">
            <div className=" mx-auto max-w-md">
              <div className=" flex flex-col gap-5">
                <div
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className=" z-10 text-center font-['Inter'] text-[20px] sm:text-[40px]"
                >
                  Авто Холод Каякент
                </div>
                <div className="w-full border-b border-slate-500 pb-5"></div>

                <div className="flex w-full place-content-center items-center gap-5 rounded-xl border border-green-900 px-5 py-3">
                  <BsWhatsapp data-aos="fade-right" color="green" size={32} />
                  <div className="z-10 flex flex-col">
                    <div
                      data-aos="fade-left"
                      data-aos-delay="200"
                      className="z-10"
                    >
                      Написать в Whatsapp
                    </div>
                    <Link
                      data-aos="fade-left"
                      data-aos-delay="300"
                      href="https://wa.me/79689866661"
                      target="_blank"
                      className="z-[1000] font-bold underline"
                    >
                      7 968 986-66-61
                    </Link>
                    <Link
                      data-aos="fade-left"
                      data-aos-delay="300"
                      href="https://wa.me/79625090505"
                      target="_blank"
                      className="z-[1000] font-bold underline"
                    >
                      7 962 509-05-05
                    </Link>
                  </div>
                </div>

                <div className="w-full border-b border-slate-500 "></div>
                <div className="z-10 w-full ">
                  <LazyMap />
                </div>
              </div>
            </div>
          </div>
          <BorderBeam size={290} duration={10} delay={3} />
          <BorderBeam size={290} duration={10} delay={10} />
          <BorderBeam size={290} duration={10} delay={5} />
          <BorderBeam size={290} duration={10} delay={7} />
          <div className="mt-5 border-t border-slate-500">
            <div className="py-3 ps-5">Auto Holod Kayakent © 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}
