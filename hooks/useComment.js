import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UseComment = () => {
  const { getAccessTokenSilently } = useAuth0()

  const [text, setText] = useState('')
  const [url, setUrl] = useState(null)
  const [comments, setComments] = useState([])
  const [loadingComments, setLoadingComments] = useState(false)

  useEffect(() => {
    fetchComment()
  }, [url])

  useEffect(() => {
    const url = window.location.origin + window.location.pathname
    setUrl(url)
  }, [])

  const fetchComment = async () => {
    if (url) {
      setLoadingComments(true)
      const query = new URLSearchParams({ url })
      const newUrl = `/api/comment?${query.toString()}`
      const response = await fetch(newUrl, {
        method: 'GET'
      })

      if (response.status === 200) {
        const data = await response.json()
        setComments(data)
      }
      setLoadingComments(false)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    var comment = text.trim()

    if (!comment || comment.length === 0) {
      return alert('Lütfen Yorumunuzu Giriniz...')
    }

    const userToken = await getAccessTokenSilently()

    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ text: comment, userToken, url }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    fetchComment()
    setText('')

    if (response.status !== 200) {
      alert('Bir hata oluştu lütfen daha sonra tekrar deneyin!')
    }
  }

  return [comments, loadingComments, onSubmit, text, setText]
}

export default UseComment
