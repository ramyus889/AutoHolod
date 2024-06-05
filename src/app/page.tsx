"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="mb-3 mt-10 flex place-content-center px-5 sm:mt-20">
      <div className="relative w-full rounded-xl border border-slate-500  py-3 sm:mx-auto sm:max-w-xl">
        <div className="relative mx-8 rounded-3xl  px-3 py-5 shadow sm:p-10 sm:py-10 md:mx-0">
          <div className="mx-auto max-w-md ">
            <div className="mt-5 flex flex-col gap-5">
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                className="text-[20px] sm:text-[40px]"
              >
                Авто Холод Каякент
              </div>
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
              <iframe
                data-aos="fade-up"
                data-aos-delay="400"
                suppressHydrationWarning={true}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1565.788892560775!2d47.94987377969101!3d42.37483565072484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sru!4v1717575789416!5m2!1sru!2sru"
                className="mt-[20px] h-[350px] rounded-xl border-0 sm:mt-[50px] sm:h-[450px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
