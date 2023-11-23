/**
 * @jest-environment jsdom
 */
import userEvent from "@testing-library/user-event";
import { getByRole, getByTestId } from "@testing-library/dom";

import SignInPage from "../../pages/signIn/index";
import { handleSignInForm } from "./index";

beforeEach(() => {
    document.body.innerHTML = SignInPage.render()
    handleSignInForm()
})
afterEach(() => {
    document.body.innerHTML = ''
})
describe('Unit test for signInForm', () => {
    it("Wrong email format should return error", () => {
        userEvent.type(
          getByTestId(document.body, "user-email-label"),
          "thomas@thomas.com"
        );
        userEvent.click(getByRole(document.body, "button"));
        expect(
          document
            .querySelector(".user-email-error-msg")
            .classList.contains("hidden")
        ).toBe(false);
      });
    it("Correct email and empty password field should return error", () => {
        userEvent.type(
          getByTestId(document.body, "user-email-label"),
          "thomas@facadia.com"
        );
        userEvent.click(getByRole(document.body, "button"));
        expect(
          document
            .querySelector(".user-password-error-msg")
            .classList.contains("hidden")
        ).toBe(false);
      });
      it("Correct email and empty password field should return error", () => {
        userEvent.type(
          getByTestId(document.body, "user-email-label"),
          "thomas@facadia.com"
        );
        userEvent.type(
            getByTestId(document.body, "user-password-label"),
            "qwerty"
          );
        userEvent.click(getByRole(document.body, "button"));
        expect(
          document
            .querySelector(".user-password-error-msg")
            .classList.contains("hidden")
        ).toBe(false);
      });
      it("Correct email and correct password should not return error", () => {
        userEvent.type(
          getByTestId(document.body, "user-email-label"),
          "thomas@facadia.com"
        );
        userEvent.type(
            getByTestId(document.body, "user-password-label"),
            "azerty"
          );
        userEvent.click(getByRole(document.body, "button"));
        expect(
          document
            .querySelector(".user-password-error-msg")
            .classList.contains("hidden")
        ).toBe(true);
        expect(
            document
              .querySelector(".user-email-error-msg")
              .classList.contains("hidden")
          ).toBe(true);
      });

    }
)