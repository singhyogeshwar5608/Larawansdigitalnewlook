'use client';

import Image from 'next/image';

export default function ServicesBanner() {
  return (
    <section className="w-full">
      <div className="relative w-full h-48 sm:h-56 md:h-72 lg:h-[420px] xl:h-[480px]">
        <Image
          src="/services-banner.png"
          alt="Professional digital marketing expert at Larawans Digital"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}