import React, { useEffect, useState } from "react";
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
import useApiRequest from "../../hooks/useApiRequest.js";

function PasswordResetValidation() {
  const [userData, setUserData] = useState({
    email: "",
    code: "",
    password: "",
    password_repeat: "",
  });
  const { sendRequest, error, data } = useApiRequest("noAuth");
  const navigate = useNavigate();

  const handleValidationSubmit = (e) => {
    e.preventDefault();
    sendRequest("patch", "auth/password-reset/validation/", userData);
  };
  useEffect(() => {
    if (data === "success") {
      navigate("/signin");
    }
  }, [data]);

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
          {error?.non_field_errors && (
            <ErrorMessage>{error.non_field_errors}</ErrorMessage>
          )}
          {error?.detail && <ErrorMessage>{error.detail}</ErrorMessage>}
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
