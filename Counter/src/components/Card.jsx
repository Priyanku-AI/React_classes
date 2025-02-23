function Card({username, text}) {
    // console.log("yeh hain props: ", props)
  return (
    <div>
      <button>
            {text}
      </button>
      <h1>{username}</h1>
    </div>
  )
}

export default Card
