import Image from "next/image";

export default function About() {
  return (
    <div className="pl-20 pr-10 pb-10">
      <h1 id="about-tag" className="font-bold text-3xl pb-10">
        About Chris
      </h1>
      <div className="md:flex m-auto mt-3">
        <div className="min-w-1/3 flex items-center justify-center">
          <Image
            src="/about_photo.jpg"
            alt="Picture of Chris"
            className="rounded-lg"
            width={400}
            height={400}
          />
        </div>
        <div className="min-w-2/3">
          <p className="mb-5">
            Chris has enjoyed 5 years of experience as a software engineer. He
            has held positions at multiple prestigious companies such as Google
            and IBM. He has worked across the entire spectrum of software
            engineering including: full-stack engineering, cloud engineering,
            and mobile engineering.
          </p>
          <p className="mb-5">
            Chris acquired his Bachelor&apos;s in Music Education in 2015 and
            his Bachelor&apos;s in Computer Science in 2018, both from Western
            Carolina University. During his time in school, Chris held many
            leadership positions such as Section Leader for the Purple Drumline
            and President of the Computer Science Club.
          </p>
          <p className="mb-5">
            Chris is passionate about creating software that makes the world a
            better place. He takes pleasure in helping others with their daily
            lives; from organizing their objectives to making their lives just a
            little more efficient. Have an idea of how to use software to make
            peoples&apos; lives easier? Contact me!
          </p>
          <p className="mb-5">
            Chris currently resides in Sanford, NC with his wife, Samantha and
            their daughter, Ryan.
          </p>
        </div>
      </div>
    </div>
  );
}
