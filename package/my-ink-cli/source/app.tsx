import React from 'react';
import { Text } from 'ink';
import chalk from 'chalk';

type Props = {
	name: string | undefined;
};

export default function App({ name = 'Sumon Sir' }: Props) {
	return (
		<Text>
			{chalk.green("Hello in green,")}, <Text color="red">{name}</Text>
		</Text>
	);
}
