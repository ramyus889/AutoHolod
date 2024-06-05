"use client";

import { FaMapMarker } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BorderBeam } from "./components/ui/border-beam";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="overflow-hidden ">
      <div className="mb-3 mt-10 flex place-content-center px-5 sm:mt-20">
        <div
          data-aos="fade-up"
          className="relative w-full rounded-[24px] border border-slate-700   sm:mx-auto sm:max-w-xl"
        >
          <div className="relative mx-8 rounded-3xl   py-5 shadow sm:p-10 sm:py-5 md:mx-0">
            <div className="mx-auto max-w-md ">
              <div className=" flex flex-col gap-5">
                <div
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className=" text-center text-[20px] sm:text-[40px]"
                >
                  Авто Холод Каякент
                </div>
                <div className="w-full border-b border-slate-500 pb-5"></div>
                <div className="">
                  <div data-aos="fade-right" data-aos-delay="200" className="">
                    Написать в Whatsapp
                  </div>
                  <Link
                    data-aos="fade-right"
                    data-aos-delay="300"
                    href="https://wa.me/79689866661"
                    target="_blank"
                    className="font-bold underline"
                  >
                    7 968 986-66-61
                  </Link>
                </div>
                <div className="relative w-full">
                  <iframe
                    data-aos="fade-up"
                    data-aos-delay="400"
                    suppressHydrationWarning={true}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d782.8915724813163!2d47.95011203724118!3d42.37506618073936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sru!4v1717576116052!5m2!1sru!2sru"
                    className="mt-[20px] h-[350px] w-full rounded-xl border-0 sm:mt-[40px] sm:h-[450px]"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <FaMapMarker
                    data-aos="fade-up"
                    data-aos-delay="600"
                    color="red"
                    size={40}
                    className="absolute left-[240px] top-[150px] animate-bounce max-[560px]:left-[230px] max-[520px]:left-[210px] max-[460px]:left-[180px] max-[400px]:left-[140px] sm:top-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <BorderBeam size={290} duration={10} delay={9} />
        </div>
      </div>
    </div>
  );
}
