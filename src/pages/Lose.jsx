import React from "react"

function Lose() {

  return (
    <React.Fragment>
      <div className="container-lose">
        <div className="containter-objects-lose">
          <div className="containter-text-lose">
            <p>You scored:</p>
            <p className="score-text">2</p>
          </div>
          <div className="container-btn-lose">
            <button className="play-again-btn" onClick={() => { window.location.href='/play'
            }}>
              <p>PLAY AGAIN</p>
            </button>
            <button className="return-btn" onClick={() => { window.location.href='/'
            }}>
              <p>RETURN</p>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )

}
export default Lose