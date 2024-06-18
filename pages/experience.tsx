import userData from "@constants/userData";
import Container from "@components/Container";
import Ping from "@components/Ping";
import { NextPage } from "next";
import Image from "next/image";

const Experience: NextPage = () => (
  <Container>
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {userData.experience.map((exp, index) => {
            return (
              <>
                <ExperienceCard
                  title={exp.title}
                  year={exp.year}
                  desc={exp.desc}
                  company={exp.company}
                  companyLink={exp.companyLink}
                  logoUrl={exp.logoUrl}
                />
                {index === userData.experience.length - 1 ? null : <Ping />}
              </>
            );
          })}
        </div>
      </div>
    </section>
  </Container>
);

interface Props {
  title: string;
  desc: string;
  year: string;
  company: string;
  companyLink: string;
  logoUrl?: string;
}

const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
  logoUrl,
}: Props) => {
  return (
    <div className="relative flex justify-between   experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <div>
        <h1 className="font-semibold text-xl">{title}</h1>
        <a href={companyLink} className="text-gray-500">
          {company}
        </a>
        {desc && (
          <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
        )}
      </div>
      {logoUrl && (
        <Image
          src={logoUrl}
          alt={company}
          width="40"
          height="40"
          sizes="100vw"
        />
      )}
    </div>
  );
};

export default Experience;
