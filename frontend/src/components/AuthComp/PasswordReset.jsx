import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthForm,
  AuthFormContainer,
  ErrorMessage,
  FormTitlePasswordReset,
  InputField,
} from "../Layout/Layout.style.js";
import { ButtonsStyle } from "../../styles/buttons.style.js";
import useApiRequest from "../../hooks/useApiRequest.js";

export default function PasswordResetRequest() {
  const [userEmail, setEmail] = useState("");
  const { sendRequest, error, data } = useApiRequest("noAuth"); // Initialize the API hook
  const navigate = useNavigate();

  const handlePasswordResetRequest = async (e) => {
    e.preventDefault();
    sendRequest("post", "auth/password-reset/", { email: userEmail });
    if (data === "success") {
      navigate("/password-reset-validation");
    }
  };
  return (
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
            {error?.email && <ErrorMessage>{error.email}</ErrorMessage>}
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
  );
}
