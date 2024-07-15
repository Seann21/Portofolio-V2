import { Center, Grid, useMantineColorScheme } from '@mantine/core';
import type { NextPage } from 'next';

import IllustrationImage from '@/components/Home/IllustrationImage';
import WelcomeText from '@/components/Home/WelcomeText';

const Home: NextPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <Center
        sx={{ height: '75vh', '@media (min-width: 768px)': { height: '80vh' } }}
      >
        <Grid align='center' 
        sx=
        {{ 
          width: '100%',
          margin: '48px',
         }}>
          <IllustrationImage
            src='/images/avatar.png'
            width={350}
            height={300}
            isDark={isDark} 
          />
          <WelcomeText isDark={isDark} />
        </Grid>
      </Center>
    </>
  );
};

export default Home;
