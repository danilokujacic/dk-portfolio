import { FunctionComponent} from 'react';
import ProfileImage from './ProfileImage';

import ProfileInformation from './ProfileInformation';

const OnboardingSection: FunctionComponent = () => {
 
  return (
    <section className='pt-24 md:pt-32 h-screen relative flex flex-col-reverse md:flex-row px-6 md:mt-12 md:px-0 mx-auto w-full md:w-5/6'>
      <ProfileInformation />
      <ProfileImage />
    </section>
  );
};

export default OnboardingSection;
