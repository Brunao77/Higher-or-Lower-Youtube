function Initial() {

  return (
    <div className="container-welcome">
      <button className="play-btn" onClick={() => { window.location.href='/play'
      }}>
        <p>PLAY</p>
      </button>
    </div>
  )

}
export default Initial