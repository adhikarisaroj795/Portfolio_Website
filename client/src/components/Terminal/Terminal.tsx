import "./Terminal.css";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscDebugConsole } from "react-icons/vsc";

interface TerminalProps {
  isTerminalActive: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ isTerminalActive }) => {
  console.log(isTerminalActive, "meow");
  // if (!isTerminalActive) {
  //   return null;
  // }
  return (
    <div
      className={`terminal-section ${
        isTerminalActive ? "terminal-active" : ""
      }`}
    >
      <div className="terminal-wrapper">
        <div className="terminal-row1 flex">
          <div className="terminal-row1-left">
            <span>PROBLEMS</span>
            <span>OUTPUTS</span>
            <span>TERMINAL</span>
            <span>PORTS</span>
          </div>
          <div className="terminal-row1-right">
            <BsThreeDots />
            <MdKeyboardArrowUp />

            <RxCross2 />
          </div>
        </div>

        <div className="terminal-row2 flex">
          <div className="terminal-row2-left ">
            <MdKeyboardArrowRight />
          </div>
          <div className="terminal-row2-right">
            <span>
              <MdKeyboardArrowDown /> TERMINAL
            </span>
          </div>
        </div>
        <div className="terminal-row3">
          <div className="terminal-row3-left">
            <VscDebugConsole />
          </div>
          <div className="terminal-row3-rigt">
            <span>moon@joras:~$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
