import Pre from '../pre/pre'

export const mdxComponents = {
  a: (props) => <a style={{ color: '#D46132' }} {...props} />,
  img: (props) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img width="60%" {...props} />
    </div>
  ),
  pre: ({ children }) => <Pre {...children.props} />
}
