import { Prism } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Pre = ({ children, className }) => {
  const lang = className.split('-')[1]
  return (
    <Prism
      language={lang}
      style={materialDark}
      codeTagProps={{ lineHeight: 'inherit', fontSize: 'inherit' }}
    >
      {children}
    </Prism>
  )
}

export default Pre
