import { useAuth0 } from '@auth0/auth0-react'

const Form = ({ onSubmit, text, setText }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()
  return (
    <form className="mt-10" onSubmit={onSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="3"
        className="textarea"
        placeholder="Görüşlerini bizimle paylaş..."
      />
      <div className="mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-2">
            <button className="bg-blue-600 text-white px-2 py-1 rounded">
              Gönder
            </button>
            <img src={user.picture} width={20} className="rounded-full" />
            <span>{user.name}</span>
            <button
              typeof="button"
              onClick={() =>
                logout({ returnTo: process.env.NEXT_PUBLIC_URL + '/blog' })
              }
            >
              X
            </button>
          </div>
        ) : (
          <button
            className="button"
            typeof="button"
            onClick={() => loginWithRedirect()}
          >
            Giriş Yap
          </button>
        )}
      </div>
    </form>
  )
}

export default Form
