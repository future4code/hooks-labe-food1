import axios from 'axios';
import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { BASE_URL } from '../../constants/BASE_URL';
import useForm from '../../hooks/useForm';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import {
	StyledButton,
	StyledDiv,
	StyledDivInput,
	DivInput,
	StyledInput,
} from '../../Styled';

const EditProfilePage = () => {
	useProtectedPage();

	const { data } = useRequestData({}, `${BASE_URL}/profile`);

	const { form, setForm, handleInputChange } = useForm({
		name: '',
		email: '',
		cpf: '',
	});

	useEffect(() => {
		if (data) {
			setForm({
				name: data.user?.name,
				email: data.user?.email,
				cpf: data.user?.cpf,
			});
		}
	}, [data]);

	const onSubmitProfileEdit = (event) => {
		event.preventDefault();

		const url = `${BASE_URL}/profile`;

		const headers = {
			headers: {
				auth: localStorage.getItem('token'),
			},
		};

		axios
			.put(url, form, headers)
			.then((response) => {
				alert('Alterado com sucesso.');
			})
			.catch((error) => {
				alert(error.response);
			});
	};

	return (
		<StyledDiv>
			<Header name='Editar' />
			<form onSubmit={onSubmitProfileEdit}>
				<StyledDivInput>
					<DivInput>
						<StyledInput
							label={'Nome'}
							variant='outlined'
							placeholder='Bruna Oliveira'
							required
							name='name'
							value={form.name}
							onChange={handleInputChange}
						/>
					</DivInput>
					<DivInput>
						<StyledInput
							label={'E-mail'}
							variant='outlined'
							placeholder='bruna_o@gmail.com'
							required
							name='email'
							value={form.email}
							onChange={handleInputChange}
						/>
					</DivInput>
					<DivInput>
						<StyledInput
							label={'CPF'}
							variant='outlined'
							placeholder='333.333.333-33'
							pattern='\d{3}\.\d{3}\.\d{3}-\d{2}'
							title='Digite um CPF no formato: xxx.xxx.xxx-xx'
							required
							name='cpf'
							value={form.cpf}
							onChange={handleInputChange}
						/>
					</DivInput>

					<StyledButton
						color='primary'
						variant='contained'
						type='submit'
					>
						Salvar
					</StyledButton>
				</StyledDivInput>
			</form>
		</StyledDiv>
	);
};

export default EditProfilePage;
