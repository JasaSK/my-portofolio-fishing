"use client";
import Image from "next/image";
import { Background1 } from "../../../components/Background";
import FadeInSection from "../../../components/FadeInSection.js";

export default function Profile() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col">
        <Image
          src="/images/background.jpg"
          alt="User Cover"
          className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] h-[11rem]"
          width={300}
          height={300}
        />

        <div className="sm:w-[80%] w-[90%] mx-auto flex">
          <FadeInSection direction="in">
            <div className="relative group w-fit mx-auto lg:bottom-[5rem] sm:bottom-[4rem] bottom-[3rem]">
              <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-full p-[4px] shadow-md">
                <Image
                  src="/images/background2.jpg"
                  alt="User Profile"
                  width={300}
                  height={300}
                  className="rounded-full object-cover
        lg:w-[12rem] lg:h-[12rem]
        md:w-[10rem] md:h-[10rem]
        sm:w-[8rem] sm:h-[8rem]
        w-[7rem] h-[7rem]"
                />
              </div>

              {/* Overlay edit icon */}
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                <button
                  onClick={() => alert("Edit Photo")}
                  className="text-white text-xl hover:text-orange-500"
                  title="Edit Photo"
                >
                  ✎
                </button>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection direction="left">
            <h1 className="w-full text-left my-4 sm:mx-4 pl-4 text-gray-800 lg:text-4xl md:text-3xl sm:text-3xl text-xl font-serif">
              Kristobel Rilon
            </h1>
          </FadeInSection>
        </div>

        <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 -top-4">
          <FadeInSection direction="in">
            <p className="w-fit text-gray-700 text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              debitis labore consectetur voluptatibus mollitia dolorem veniam
              omnis ut quibusdam minima sapiente repellendus asperiores
              explicabo, eligendi odit, dolore similique fugiat dolor,
              doloremque eveniet. Odit, consequatur. Ratione voluptate
              exercitationem hic eligendi vitae animi nam in, est earum culpa
              illum aliquam.
            </p>
          </FadeInSection>

          <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
            <div className="w-full flex sm:flex-row flex-col gap-2 justify-center">
              <div className="w-full">
                <dl className="text-gray-700 divide-y divide-gray-200">
                  <div className="flex flex-col pb-3">
                    <FadeInSection direction="in">
                      <dt className="mb-1 text-gray-500 md:text-lg">
                        First Name
                      </dt>
                    </FadeInSection>
                    <FadeInSection direction="left">
                      <dd className="text-lg font-semibold">Samuel</dd>
                    </FadeInSection>
                  </div>
                  <div className="flex flex-col py-3">
                    <FadeInSection direction="in">
                      <dt className="mb-1 text-gray-500 md:text-lg">
                        Last Name
                      </dt>
                    </FadeInSection>
                    <FadeInSection direction="left">
                      <dd className="text-lg font-semibold">Abera</dd>
                    </FadeInSection>
                  </div>
                  <div className="flex flex-col py-3">
                    <FadeInSection direction="in">
                      <dt className="mb-1 text-gray-500 md:text-lg">
                        Date Of Birth
                      </dt>
                    </FadeInSection>
                    <FadeInSection direction="left">
                      <dd className="text-lg font-semibold">14/05/1977</dd>
                    </FadeInSection>
                  </div>
                  <div className="flex flex-col py-3">
                    <FadeInSection direction="in">
                      <dt className="mb-1 text-gray-500 md:text-lg">Gender</dt>
                    </FadeInSection>
                    <FadeInSection direction="left">
                      <dd className="text-lg font-semibold">Male</dd>
                    </FadeInSection>
                  </div>
                </dl>
              </div>
              <div className="w-full">
                <dl className="text-gray-700 divide-y divide-gray-200">
                  <div className="flex flex-col pb-3">
                    <FadeInSection direction="in">
                      <dt className="mb-1 text-gray-500 md:text-lg">
                        Location
                      </dt>
                    </FadeInSection>
                    <FadeInSection direction="left">
                      <dd className="text-lg font-semibold">
                        Ethiopia, Addis Ababa
                      </dd>
                    </FadeInSection>
                  </div>

                  <div className="flex flex-col py-3">
                    <FadeInSection direction="in">
                      <dt className="mb-1 text-gray-500 md:text-lg">
                        Phone Number
                      </dt>
                    </FadeInSection>
                    <FadeInSection direction="left">
                      <dd className="text-lg font-semibold">+251913****30</dd>
                    </FadeInSection>
                  </div>
                  <div className="flex flex-col py-3">
                    <FadeInSection direction="in">
                      <dt className="mb-1 text-gray-500 md:text-lg">Email</dt>
                    </FadeInSection>
                    <FadeInSection direction="left">
                      <dd className="text-lg font-semibold">
                        samuel@example.com
                      </dd>
                    </FadeInSection>
                  </div>

                  <div className="flex flex-col py-3">
                    <FadeInSection direction="in">
                      <dt className="mb-1 text-gray-500 md:text-lg">Website</dt>
                    </FadeInSection>
                    <FadeInSection direction="left">
                      <dd className="text-lg font-semibold hover:text-blue-500">
                        <a href="https://techakim.com">
                          https://www.teclick.com
                        </a>
                      </dd>
                    </FadeInSection>
                  </div>
                </dl>
              </div>
            </div>

            <FadeInSection direction="in">
              <div className="my-10 lg:w-[100%] md:h-[20rem] w-full h-[10rem]">
                <FadeInSection direction="in">
                  <h1 className="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-900 text-black/80 lg:text-4xl md:text-3xl text-xl">
                    My Location
                  </h1>
                </FadeInSection>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328040215286!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710567234587!5m2!1sen!2set"
                  className="rounded-lg w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
