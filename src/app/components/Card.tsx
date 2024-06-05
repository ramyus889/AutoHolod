import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FaMapMarker } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Example = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="mt-10 flex place-content-center">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[900px] w-[540px] rounded-xl bg-gradient-to-br "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl border-slate-500 shadow-lg"
      >
        <div className="overflow-hidden">
          <div className="mb-3 mt-10 flex place-content-center px-5 sm:mt-20">
            <div
              data-aos="fade-up"
              className="relative w-full rounded-xl border border-slate-500  py-3 sm:mx-auto sm:max-w-xl"
            >
              <div className="relative mx-8 rounded-3xl  px-3 py-5 shadow sm:p-10 sm:py-5 md:mx-0">
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
                      <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className=""
                      >
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
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Example;
