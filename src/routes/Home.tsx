import { FunctionComponent } from 'react';
import ProjectList from '../components/ProjectList/ProjectList';
import OnboardingSection from '../components/Sections/Onboarding';
import Divider from '../components/Shared/Divider';

const Home: FunctionComponent = () => {
  return (
    <>
      <OnboardingSection />
      <Divider />
      <ProjectList />
    </>
  );
};

export default Home;
