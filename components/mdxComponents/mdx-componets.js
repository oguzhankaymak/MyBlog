import Pre from '../pre/pre'

export const mdxComponents = {
  h2: (props) => <h2 style={{ color: 'gray' }} {...props} />,
  pre: ({ children }) => <Pre {...children.props} />
}
