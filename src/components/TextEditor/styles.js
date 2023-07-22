import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  background-color: #25262c;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextEditorContainer = styled.div`
  padding: 50px;
  background-color: #1b1c22;
  border-radius: 4px;
  display: flex;
`

export const AppTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  text-align: center;
`
export const AppLogo = styled.img`
  width: 400px;
`
export const UserActionContainer = styled.div`
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  margin-left: 30px;
`
export const EditorOptionsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid #cbd5e1;
`
export const OptionsList = styled.li`
  margin-right: 20px;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  outline: none;
  font-family: 'Roboto';
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.decoration ? 'underline' : 'normal')};
  font-size: 14px;
  color: #ffffff;
  padding: 10px;
  border: 0px solid;
`
export const Button = styled.button`
  background-color: transparent;
  border: 0px solid;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`
