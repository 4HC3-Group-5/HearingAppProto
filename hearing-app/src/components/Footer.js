import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <footer className="py-3 bg-light">
        <div className="container">
          <div className="m-0 text-center">
            Copyright © 2022 Hearing Test App. Hamilton, Canada. All rights
            reserved.
          </div>
          <div className={"d-flex footerLinks"}>
            <a className="m-2" href="#">
              <img src="https://img.icons8.com/android/24/000000/facebook-new.png"></img>
            </a>

            <a className="m-2" href="#">
              <img src="https://img.icons8.com/android/24/000000/twitter.png"></img>
            </a>
            <a className="m-2" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

