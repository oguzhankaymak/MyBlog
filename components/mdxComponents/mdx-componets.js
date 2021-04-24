import Pre from '../pre/pre'

export const mdxComponents = {
  h1: (props) => <h1 style={{ color: 'black' }} {...props} />,
  h2: (props) => <h2 style={{ color: 'black' }} {...props} />,
  h3: (props) => <h3 style={{ color: 'black' }} {...props} />,
  a: (props) => <a style={{ color: '#D46132' }} {...props} />,
  pre: ({ children }) => <Pre {...children.props} />
}
