import { Box, Grid, Stack, Text } from '@mantine/core';
import React, { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { useStyles } from '@/hooks/useStyles';
import DownloadResumeButton from './downloadresume';

interface Props {
  isDark: boolean;
}

const WelcomeText: FC<Props> = ({ isDark }) => {
  const { classes } = useStyles();

  return (
    <Grid.Col sm={6} orderSm={1}>
      <Stack
        spacing='md'
        sx={{
          textAlign: 'center',
          '@media (min-width: 768px)': {
            textAlign: 'left',
          },
        }}
      >
        <Box>
          <Text
            weight='bold'
            sx={{
              fontSize: 36,
              '@media (min-width: 768px)': {
                fontSize: 42,
              },
            }}
            color={isDark ? 'white' : 'dark'}
          >
            Moh Hasan Efendi
          </Text>
          <TypeAnimation
            sequence={[
              'Front End Developer',
              2000,
              'Web Development',
              2000,
              'UI/UX Design',
              2000,
            ]}
            cursor={true}
            repeat={Infinity}
            className={classes.gradientText}
          />
          {/* </Text> */}
        </Box>
        <Text
          size='md'
          sx={{
            '@media (min-width: 992px)': {
              fontSize: 17,
              padding: 4,
            },
          }}
        >
        Hi everyone <span className='wave'>👋</span>, welcome to my portfolio
          website
        </Text>

      </Stack>
          <DownloadResumeButton/>
    </Grid.Col>
  );
};

export default WelcomeText;
