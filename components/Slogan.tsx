import Image from 'next/image';
import UserFeeds from './UserFeeds';

const Slogan = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="relative flex w-full max-w-60 justify-center aspect-square">
          <Image
            src={`/logo-primary.png`}
            alt={`Yumcipe website logo`}
            loading="eager"
            fill
            className="object-contain object-left"
            sizes="(max-width: 540px) 50vw, 25vw"
          />
        </div>
        <p className="text-center font-poiret text-primary text-2xl font-extrabold">
          Every recipe tells a story.
        </p>
        <p className="text-center font-poiret text-primary text-2xl">
          Rasavattōru collects them from every corner of the earth.
        </p>
      </div>
      <UserFeeds />
    </>
  );
};

export default Slogan;
