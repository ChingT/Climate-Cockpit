import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AuthForm,
  AuthFormContainer,
  ErrorMessage,
  FormTitlePasswordReset,
  InputField,
} from "../Layout/Layout.style.js";
import { ButtonsStyle } from "../../styles/buttons.style.js";

function PasswordResetRequest() {
  const [userEmail, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePasswordResetRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("auth/password-reset/", {
        email: userEmail,
      });
      if (response.status === 200) {
        navigate("/password-reset-validation");
      }
    } catch (error) {
      setError("Email not found. Please double-check the email address.");
    }
  };

  return (
    <>
      <AuthFormContainer>
        <AuthForm>
          <div className={"input-container"}>
            <FormTitlePasswordReset>
              Password Reset Request
            </FormTitlePasswordReset>
            <InputField>
              <div className={"input-wrapper"}>
                <input
                  placeholder="Email"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </InputField>
            <ButtonsStyle
              style={{ marginTop: "1rem" }}
              onClick={handlePasswordResetRequest}
            >
              Request Reset
            </ButtonsStyle>
          </div>
        </AuthForm>
      </AuthFormContainer>
    </>
  );
}

export default PasswordResetRequest;
