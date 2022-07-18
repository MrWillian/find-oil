import styled from "styled-components/native";

export const MainContainer = styled.View`
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
`;

export const Input = styled.TextInput`
    height: 40,
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 8
`;

export const Label = styled.Text`
    fontSize: 14,
    color: '#fff',
    marginBottom: 4
`;

export const Container = styled.View`
    width: '80%',
    borderRadius: 10,
    marginBottom: 10
`;

export const ErrorMessage = styled.Text`
    fontSize: 12,
    color: 'rgba(200,0,50,1)',
    textAlign: 'center',
    marginTop: 5
`;

export const RegisterButton = styled.Button``;

    // borderWidth: 1,
    // borderColor: 'rgba(200,0,50,1)'
