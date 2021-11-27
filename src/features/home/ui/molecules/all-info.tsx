import React, { memo } from 'react';
import { User } from '../../../../entities/user/model';

export default memo(AllInfo);

interface Props {
	user: User
}

function AllInfo({ user }: Props) {
	const { status, sex, birthday, code, faculty, course, group, specialty, specialization, degreeLength, educationForm, finance, degreeLevel, enterYear } = user;
	return (
		<div>
			<p><b>Статус:</b> {status}</p>
			<p><b>Пол: </b>{sex}</p>
			<p><b>Дата рождения:</b> {birthday}</p>
			<p><b>Код студента: </b>{code}</p>
			<p><b>Факультет:</b> {faculty}</p>
			<p><b>Курс:</b> {course}</p>
			<p><b>Группа:</b> {group}</p>
			<p><b>Специальность:</b> {specialty}</p>
			<p><b>Специализация: </b> {specialization}</p>
			<p><b>Срок обучения: </b> {degreeLength}</p>
			<p><b>Форма обучения: </b> {educationForm}</p>
			<p><b>Вид финансирования: </b> {finance}</p>
			<p><b>Уровень образования:</b> {degreeLevel}</p>
			<p><b>Год набора:</b> {enterYear}</p>
		</div>
	)
}