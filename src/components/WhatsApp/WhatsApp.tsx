import React, { FC, useState } from 'react';
import './WhatsApp.scss'

const WhatsApp: FC = () => {
	const [number, setNumber] = useState('');
	const [message, setMessage] = useState('');

	const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNumber(event.target.value);
	};

	const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(event.target.value);
	};

	const handleSendMessage = () => {
		console.log(`Sending message to ${number}: ${message}`);
	};

	return (
		<div className="whatsapp__wrapper">
			<div className="whatsapp__container">
				<h2>Написать нам в WhatsApp</h2>

				<input type="tel" placeholder="Ваш номер телефона" value={number} onChange={handleNumberChange} />
				<textarea placeholder="Введите сообщение" value={message} onChange={handleMessageChange} />
				<button onClick={handleSendMessage}>Отправить сообщение</button>
			</div>
		</div>
	);
};

export default WhatsApp;
