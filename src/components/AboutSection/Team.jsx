import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { useSiteData } from "../../sanity/SanityContext";
import { urlFor } from "../../sanity/imageUrl";
import { SkeletonCircle, SkeletonText } from "../AnimationComponents/Skeleton";

const Team = () => {
    const { data, loading } = useSiteData();
    const members = data?.team || [];

    return (
        <div className="sezione bg-white">
            <div className="flex justify-center items-center h-full p-5">
                <ul className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-24">
                    {loading
                        ? Array.from({ length: 3 }).map((_, i) => (
                              <li key={i} className="flex flex-col items-center gap-3">
                                  <SkeletonCircle className="h-40 w-40 lg:h-48 lg:w-48" />
                                  <SkeletonText className="h-5 w-32" />
                                  <SkeletonText className="h-4 w-24" />
                              </li>
                          ))
                        : members.map((member) => {
                              const { name, role, photo, linkedin } = member;
                              const imgSrc = photo
                                  ? urlFor(photo).width(192).height(192).fit('crop').url()
                                  : null;

                              return (
                                  <li key={name} className="flex flex-col justify-center items-center">
                                      <div className="rounded-full ring-4 ring-logo-light overflow-hidden h-40 w-40 lg:h-48 lg:w-48">
                                          {imgSrc && (
                                              <img
                                                  src={imgSrc}
                                                  alt={name}
                                                  width={192}
                                                  height={192}
                                                  className="h-full w-full object-cover"
                                                  loading="lazy"
                                              />
                                          )}
                                      </div>
                                      <h2 className="text-lg lg:text-2xl my-2 font-marcellus">{name}</h2>
                                      <h3 className="text-sm lg:text-base font-work text-gray-500 tracking-wide uppercase">
                                          {role}
                                      </h3>
                                      {linkedin && (
                                          <a
                                              href={linkedin}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="text-3xl lg:text-4xl text-logo my-2 hover:text-logo-dark transition-colors duration-200"
                                              aria-label={`LinkedIn di ${name}`}
                                          >
                                              <FaLinkedin />
                                          </a>
                                      )}
                                  </li>
                              );
                          })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Team;
