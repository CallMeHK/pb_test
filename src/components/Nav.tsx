import { useLocation } from "wouter-preact";
import { is_authenticated, logout } from "../signals";
import { useRef } from "preact/hooks";

const MenuItem = ({
  children,
  onClick,
}: {
  children: string;
  onClick: (e?: any) => any;
}) => (
  <li>
    <a href="#" onClick={onClick}>
      {children}
    </a>
  </li>
);

export const Nav = () => {
  const [_location, setLocation] = useLocation();
  const dropdownRef = useRef();
  const signOut = (e: any) => {
    logout();
    e.preventDefault();
    dropdownRef.current.open = false;
  };

  const navigate = (link: string) => (e: any) => {
    e.preventDefault();
    setLocation(link);
    dropdownRef.current.open = false;
  };

  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <a href="./" className="contrast" onClick={navigate("/")}>
            <img src="./beer-mug-icon.svg" style={{ height: '22px', marginRight: '8px', marginBottom: '5px' }} />
            <strong>
              beer.tylergregg
            </strong>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <details role="list" dir="rtl" ref={dropdownRef}>
            <summary aria-haspopup="listbox" role="link" className="secondary">
              Menu
              {/* 
              Apps
              */}
            </summary>
            <ul role="listbox">
              <MenuItem onClick={navigate("/")}>Home</MenuItem>
              <MenuItem onClick={navigate("/resume")}>Resume</MenuItem>
              <MenuItem onClick={navigate("/beer")}>GF Beer</MenuItem>
              <MenuItem onClick={navigate("/tech")}>Tech</MenuItem>
              {is_authenticated.value && <MenuItem onClick={navigate("/todos")}>Todos</MenuItem>}
              {is_authenticated.value && <MenuItem onClick={navigate("/chat")}>Chat</MenuItem>}
              {is_authenticated.value && <MenuItem onClick={signOut}>Sign out</MenuItem>}
              {!is_authenticated.value && <MenuItem onClick={navigate("/signin")}>Sign in</MenuItem>}
              
            </ul>
          </details>
        </li>
        {/*
        <li>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link" className="secondary">
              Examples
            </summary>
            <ul role="listbox">
              <li>
                <a href="../preview/">Preview</a>
              </li>
              <li>
                <a href="../preview-rtl/">Right-to-left</a>
              </li>
              <li>
                <a href="../classless/">Class-less</a>
              </li>
              <li>
                <a href="../basic-template/">Basic template</a>
              </li>
              <li>
                <a href="../company/">Company</a>
              </li>
              <li>
                <a href="../google-amp/">Google Amp</a>
              </li>
              <li>
                <a href="../sign-in/">Sign in</a>
              </li>
              <li>
                <a href="../bootstrap-grid/">Bootstrap grid</a>
              </li>
            </ul>
          </details>
        </li>
      */}
      </ul>
    </nav>
  );
};
