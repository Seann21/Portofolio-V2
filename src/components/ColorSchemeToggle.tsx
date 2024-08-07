import {
  Group,
  Switch,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const SwitchToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Group position='center'>
      <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        styles={{
          thumb: { cursor: 'pointer' },
          track: { cursor: 'pointer' }
        }}
        size='md'
        color={colorScheme === 'dark' ? 'violet' : 'dark'}
        onLabel={<BsFillSunFill size={14} color='yellow' />}
        offLabel={<BsFillMoonFill size={14} color={theme.colors.violet[5]} />}
      />
    </Group>
  );
};

export default SwitchToggle;
