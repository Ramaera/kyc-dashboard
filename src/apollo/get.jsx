let mutation = {
  signUp: {
    input: { name, email, password, mobileNumber, role: ['ADMIN', 'SALESMAN'] },
    Output: { accessToken, refreshToken, me }
  },
  login: {
    input: { email, password },
    Output: { accessToken, refreshToken, me }
  }
};
