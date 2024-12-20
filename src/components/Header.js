import "../App.css";
import { FaEllipsisV, FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Header() {
  return (
    <div className="App-Header">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <h3
            className="font-bold text-lg"
            style={{ fontSize: "30px", margin: "24px" }}
          >
            Morgan Herg's Portfolio
          </h3>
        </div>
        <div className="flex-none">
          <div className="tooltip tooltip-left" data-tip="About Morgan">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <FaEllipsisV />
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Morgan Herg</h3>
          <p className="py-4">
            Based out of Houston Texas, I am a versatile Full-Stack Software
            Engineer with expertise in React, Angular, .NET/C#, SQL, and API
            design. I have a proven track record of driving growth and success
            in startups and established companies through innovative
            development, effective problem-solving, and a focus on delivering
            high-quality software solutions. And providing for my 5 parrots.
          </p>
          <div className="modal-action">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "16px",
              }}
            >
              <FaLinkedin color="info" />
              <a
                className="link link-hover link-info"
                href="https://www.linkedin.com/in/morganherg/"
                style={{ marginLeft: "8px" }}
              >
                LinkedIn
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <FaGithubSquare />
              <a
                className="link link-hover link-info"
                href="https://github.com/morganherg"
                style={{ marginLeft: "8px" }}
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Header;
