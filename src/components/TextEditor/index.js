import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  TextEditorContainer,
  AppLogo,
  UserActionContainer,
  EditorOptionsContainer,
  TextArea,
  Button,
  AppTitle,
  OptionsList,
} from './styles'

class TextEditor extends Component {
  state = {userInput: '', bold: false, italic: false, decoration: false}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickDecoration = () => {
    this.setState(prevState => ({decoration: !prevState.decoration}))
  }

  render() {
    const {userInput, decoration, bold, italic} = this.state

    const app = (
      <MainContainer>
        <TextEditorContainer>
          <div>
            <AppTitle>Text Editor</AppTitle>
            <AppLogo
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <UserActionContainer>
            <EditorOptionsContainer>
              <OptionsList>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBold}
                  color={bold ? '#faff00' : '#f1f5f9'}
                >
                  <VscBold size={25} />
                </Button>
              </OptionsList>
              <OptionsList>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  color={italic ? '#faff00' : '#f1f5f9'}
                >
                  <GoItalic size={25} />
                </Button>
              </OptionsList>
              <OptionsList>
                <Button
                  data-testid="underline"
                  onClick={this.onClickDecoration}
                  color={decoration ? '#faff00' : '#f1f5f9'}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </OptionsList>
            </EditorOptionsContainer>
            <TextArea
              rows="28"
              cols="50"
              onChange={this.onChangeUserInput}
              decoration={decoration}
              bold={bold}
              italic={italic}
            >
              {userInput}
            </TextArea>
          </UserActionContainer>
        </TextEditorContainer>
      </MainContainer>
    )
    return app
  }
}

export default TextEditor
