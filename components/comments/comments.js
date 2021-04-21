import { DateTime } from 'luxon'

const Comments = ({ loading, comments }) => {
  return (
    <div className="mt-10 space-y-4">
      {loading ? (
        <div>Yükleniyor...</div>
      ) : (
        comments.map(({ id, createdTime, text, user }) => {
          return (
            <div key={id} className="flex items-center space-x-2">
              <div>
                <img
                  src={user.picture}
                  alt={user.name}
                  width={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="space-x-2">
                  <b>{user.name}</b>
                  <time className="text-gray-500">
                    {DateTime.fromMillis(createdTime).toRelative()}
                  </time>
                </div>
                <p>{text}</p>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Comments
