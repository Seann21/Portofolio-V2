import { Center, Grid, Text } from '@mantine/core';

import { introduction } from '@/data/About/introdution';

import RoundedImage from './RoundedImage';

const Introduction = () => {
  return (
    <Grid>
      <Grid.Col xs={12} md={3} orderXs={1} orderMd={2}>
        <Center sx={{ paddingTop: '2rem', marginLeft: '2.9rem' }}>
          <RoundedImage
            src='/images/profilku.png'
            width={150}
            height={150}
          />
        </Center>
      </Grid.Col>
      <Grid.Col xs={12} md={9} orderXs={2} orderMd={1}>
        <Text size={42} weight='bold'>
          About Me
        </Text>
        <Text
          component='span'
          variant='gradient'
          size={26}
          weight='bold'
          gradient={{ from: 'pink', to: 'indigo', deg: 45 }}
        >
          Hasan Efendi
        </Text>
        {introduction.map((each, idx) => (
          <Text size='md' my='sm' key={idx}>
            {each}
          </Text>
        ))}
      </Grid.Col>
    </Grid>
  );
};

export default Introduction;
