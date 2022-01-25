import "../../SCSS/Components/_hero.scss";
import "../../SCSS/Components/_carousel.scss";

function Slide(props) {
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];

  const day = date.toLocaleDateString("us-US", {
    day: "2-digit",
  });

  return (
    <div>
      <div className="hero">
        <div className="text-center">
          <p className="text-small">
            <span>
              {props.tags}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{month}
              &nbsp;{day}
              &nbsp;{year}
            </span>
          </p>
          <h1>
            <a href="#home">{props.title}</a>
          </h1>
          <p>{props.desc}</p>
        </div>
      </div>
      <img className="carousel__image" src={props.img} alt=""></img>
    </div>
  );
}

export default Slide;

// CLOUD&CYBERSECURITY;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAN&nbsp;21,&nbsp;2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TOMASZ&nbsp;DUDKOWSKI

// Rackspace Technology:
//   <br /> Delivering multi-cloud solutions

// As digital transformation continues and AI becomes more accessible,
// we take a look at some of the top AI applications for business in
// 2022
