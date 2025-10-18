import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

export const metadata = {
  title: 'Devzilla group | IT design company',
  description: 'IT design company',
};

export default function Home() {
  return (
    <>
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <section className={'w-full'}>
          <AppContainer>
            <Typography as={'h1'} variant={'h1'} className={'text-blue'}>
              Content
            </Typography>
          </AppContainer>
        </section>
      </main>
    </>
    // </div>
  );
}
