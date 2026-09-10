import HeaderWrapper from '@/components/HeaderWrapper';
import LandingPage from '@/components/LandingPage';

export default function Home() {
  return (
    <div className="flex h-full">
      <HeaderWrapper>
        <LandingPage />
      </HeaderWrapper>
    </div>
  );
}
