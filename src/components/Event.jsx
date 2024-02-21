import React from "react";
import "./css/Event.css";
import Event1 from "../Image/cybercss.png";
import Event2 from "../Image/cyberjunkies.png";
import Event3 from "../Image/cyberhacakathon.png";
import Event4 from "../Image/logic.jpg";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
      <div className="eventheading">
        <div className="eventhead">EVENTS</div>
        <div className="eventdesc">
          Explore the events at{" "}
          <span className="event-desc-span">CYBER-FIESTA</span>
        </div>
      </div>
      <div className="event">
        <div className="event-container">
          {/* first event */}
          <div className="card">
            <img src={Event1} alt="css battle" />
            <h1 className="event-heading">CSS BATTLE</h1>
            <br />
            <p className="price">FIRST PRIZE: ₹1000</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              officiis voluptas esse excepturi nostrum modi, eius magnam quas?
              Pariatur, nihil.
            </p>
            <br />
            <p>
              <button>
                <Link
                  to="https://forms.gle/kYo7KmUmetdABAtJ7"
                  className="registerbutton"
                  target="blank"
                >
                  Register Now
                </Link>
              </button>
            </p>
          </div>
          {/* first event ends  */}

          {/* second event */}
          <div className="card">
            <img src={Event2} alt="tech jukies" />
            <h1 className="event-heading2">TECH JUNKIES</h1>
            <br />
            <p className="price">FIRST PRIZE: ₹1000</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              laudantium porro aliquid ex atque sit eum aspernatur veritatis
              quaerat amet.
            </p>
            <br />
            <p>
              <button>
                <Link
                  to="https://forms.gle/kYo7KmUmetdABAtJ7"
                  className="registerbutton"
                  target="blank"
                >
                  Register Now
                </Link>
              </button>
            </p>
          </div>
          {/* second event ends  */}

          {/* third event */}
          <div className="card">
            <img src={Event3} alt="hackathon" />
            <h1 className="event-heading3">HACKATHON</h1>
            <br />
            <p className="price">FIRST PRIZE: ₹1000</p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              ullam distinctio, ipsa harum vel qui? Nobis animi vero minus
              voluptate.
            </p>
            <br />
            <p>
              <button>
                <Link
                  to="https://forms.gle/kYo7KmUmetdABAtJ7"
                  target="blank"
                  className="registerbutton"
                >
                  Register Now
                </Link>
              </button>
            </p>
          </div>
          {/* third event ends  */}

          {/* fourth event */}
          <div className="card">
            <img src={Event4} alt="logic wizard" />
            <h1 className="event-heading4">LOGIC WIZARD</h1>
            <br />
            <p className="price">FIRST PRIZE: ₹1000</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ducimus deserunt nisi saepe odio nulla consequatur illo impedit
              doloremque eius.
            </p>
            <br />
            <p>
              <button>
                <Link
                  to="https://forms.gle/kYo7KmUmetdABAtJ7"
                  target="blank"
                  className="registerbutton"
                >
                  Register Now
                </Link>
              </button>
            </p>
          </div>
          {/* fourth event ends  */}
        </div>
      </div>
    </>
  );
};

export default Event;
