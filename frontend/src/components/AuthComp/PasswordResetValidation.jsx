import React, { useState } from "react";
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

function PasswordResetValidation() {
  const [userData, setUserData] = useState({
    email: "",
    code: "",
    password: "",
    password_repeat: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleValidationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "auth/password-reset/validation/",
        userData,
      );
      if (response.status === 200) {
        navigate("/signin");
      }
    } catch (error) {
      setError(
        "Password reset validation failed. Please double-check your inputs.",
      );
    }
  };

  return (
    <>
      <AuthFormContainer>
        <AuthForm>
          <div className={"input-container"}>
            <FormTitlePasswordReset>
              Password Reset Validation
            </FormTitlePasswordReset>
            <InputField>
              <div className={"input-wrapper"}>
                <input
                  placeholder="Email"
                  type="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </InputField>
            <InputField>
              <div className={"input-wrapper"}>
                <input
                  placeholder="Validation Code"
                  type="text"
                  value={userData.code}
                  onChange={(e) =>
                    setUserData({ ...userData, code: e.target.value })
                  }
                />
              </div>
            </InputField>
            <InputField>
              <div className={"input-wrapper"}>
                <input
                  placeholder="New Password"
                  type="password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
            </InputField>
            <InputField>
              <div className={"input-wrapper"}>
                <input
                  placeholder="Repeat Password"
                  type="password"
                  value={userData.password_repeat}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      password_repeat: e.target.value,
                    })
                  }
                />
              </div>
            </InputField>
          </div>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <div>
            <ButtonsStyle
              style={{ marginTop: "2.7rem" }}
              onClick={handleValidationSubmit}
            >
              Reset Password
            </ButtonsStyle>
          </div>
        </AuthForm>
      </AuthFormContainer>
    </>
  );
}

export default PasswordResetValidation;
