import Link from 'next/link'

const SocialMediaFooter = () => {
  return (
    <>
      <Link href="mailto:oguzhankaymakdev@gmail.com">
        <a>
          <img src="/mail.svg" height={25} width={25} />
        </a>
      </Link>
      <Link href="https://twitter.com/oguzhankaymakk">
        <a>
          <img src="/twitter.svg" height={25} width={25} />
        </a>
      </Link>
      <Link href="https://github.com/oguzhankaymak">
        <a>
          <img src="/github.svg" height={25} width={25} />
        </a>
      </Link>
      <Link href="https://www.instagram.com/oguzhankaymakk/">
        <a>
          <img src="/instagram.svg" height={25} width={25} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/oguzhankaymak/">
        <a>
          <img src="/linkedin.svg" height={25} width={25} />
        </a>
      </Link>
    </>
  )
}

export default SocialMediaFooter
