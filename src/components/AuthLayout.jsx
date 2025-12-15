import { Container } from "react-bootstrap";
import "../Hero.css";
import "../Login.css";

const AuthLayout = ({ title, children }) => {
  return (
    <div className="login-page">
      <video
        className="hero-video"
        src="https://res.cloudinary.com/dqr3lnf49/video/upload/v1762784258/videoOp_dwrw9t.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay"></div>

      <div className="login-container d-flex justify-content-center align-items-center">
        <div className="login-box p-4">
          <h2 className="login-title mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
