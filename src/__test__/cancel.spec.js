import axios from 'axios';

jest.mock('axios'); 

it('should not throw when getting a cancel token', () => {
	//arrange
	var cancelToken = axios.CancelToken;

	//act
	const source = cancelToken.source();

	//assert
	expect(source).toBeDefined();
	const token = source.token;
	expect(token).toBeDefined();
});