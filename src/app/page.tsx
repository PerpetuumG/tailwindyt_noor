import Hero from '@/components/Hero';
import Photos from '@/components/Photos';
import Container from '@/components/Container';
import Newsletter from '@/components/Newsletter';
import Resume from '@/components/Resume';

export default async function Home() {
  return (
    <main>
      <Hero />
      <Photos />

      <Container className={'mt-24 md:mt-28'}>
        <div className={'max-w-xl mx-auto grid grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'}>
          {/* Right */}
          <div className={''}>article</div>

          {/*  Left */}
          <div className={'space-y-10 lg:pl-16 xl:pl-24'}>
            <Newsletter />

            <Resume />
          </div>
        </div>
      </Container>
    </main>
  );
}
