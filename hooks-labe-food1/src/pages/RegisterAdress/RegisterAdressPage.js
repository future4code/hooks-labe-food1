import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { BASE_URL } from '../../constants/BASE_URL';
import useForm from '../../hooks/useForm';
import { goToFeed } from '../../routes/coordinators';
import {
	DivH1,
	DivInput,
	StyledDiv,
	StyledDivInput,
	StyledInput,
	StyledButton,
} from '../../Styled';

const RegisterAdressPage = () => {
	const { form, handleInputChange, clear } = useForm({
		street: '',
		number: '',
		neighbourhood: '',
		city: '',
		state: '',
		complement: '',
	});
	const navigate = useNavigate();

	const onSubmitAddress = (event) => {
		event.preventDefault();

		const url = `${BASE_URL}/address`;

		const headers = {
			headers: {
				auth: localStorage.getItem('token'),
			},
		};

		axios
			.put(url, form, headers)
			.then((response) => {
				localStorage.setItem('token', response.data.token);
				alert('Endereço registrado.');
				clear();
				goToFeed(navigate)
			})
			.catch((error) => {
				alert(error.response);
			});
	};

	return (
		<StyledDiv>
			<Header haveButton={true}/>

			<DivH1>
				<h1>Meu endereço</h1>
			</DivH1>

			<form onSubmit={onSubmitAddress}>
				<StyledDivInput>
					<DivInput>
						<StyledInput
							id='outlined-required'
							label={'Logradouro'}
							variant='outlined'
							placeholder='Rua / Av'
							required
							name='street'
							value={form.street}
							onChange={handleInputChange}
						/>
					</DivInput>

					<DivInput>
						<StyledInput
							id='outlined-required'
							label={'Número'}
							variant='outlined'
							placeholder='Número'
							required
							name='number'
							value={form.number}
							onChange={handleInputChange}
						/>
					</DivInput>

					<DivInput>
						<StyledInput
							label={'Complemento'}
							variant='outlined'
							placeholder='Apto. / Bloco'
							name='complement'
							value={form.complement}
							onChange={handleInputChange}
						/>
					</DivInput>

					<DivInput>
						<StyledInput
							label={'Bairro'}
							variant='outlined'
							placeholder='Bairro'
							required
							name='neighbourhood'
							value={form.neighbourhood}
							onChange={handleInputChange}
						/>
					</DivInput>

					<DivInput>
						<StyledInput
							label={'Cidade'}
							variant='outlined'
							placeholder='Cidade'
							required
							name='city'
							value={form.city}
							onChange={handleInputChange}
						/>
					</DivInput>

					<DivInput>
						<StyledInput
							label={'Estado'}
							variant='outlined'
							placeholder='Estado'
							required
							name='state'
							value={form.state}
							onChange={handleInputChange}
						/>
					</DivInput>

					<StyledButton
						color='primary'
						variant='contained'
						type={'submit'}
					>
						Salvar
					</StyledButton>
				</StyledDivInput>
			</form>
		</StyledDiv>
	);
};

export default RegisterAdressPage;
