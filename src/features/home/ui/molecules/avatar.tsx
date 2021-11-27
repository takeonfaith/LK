import React from 'react';

import { Container, Img } from '../atoms/avatar';

export default Avatar;

interface Props {
	avatar: string
}

function Avatar({ avatar }: Props) {
	return (
		<Container>
			<Img src={avatar} alt='Аватар пользователя' />
		</Container>
	)
}
