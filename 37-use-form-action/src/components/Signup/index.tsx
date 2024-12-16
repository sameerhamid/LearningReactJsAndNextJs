import {
  hasMinLength,
  isEmail,
  isEqualToOtherValue,
  isNotEmpty,
} from "../../util/validation";

export default function Signup() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.currentTarget);

    // Convert FormData to a plain object for easier manipulation
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const {
      "confirm-password": confirmPassword,
      email,
      "first-name": firstName,
      "last-name": lastName,
      password,
      role,
      terms,
    } = data;

    // Get multi-value fields like 'acquisition'
    const acquisition = formData.getAll("acquisition") as string[];

    const errors: string[] = [];

    if (!isEmail(email as string)) {
      errors.push("Invalid email.");
    }

    if (
      !isNotEmpty(password as string) ||
      !hasMinLength(password as string, 6)
    ) {
      errors.push("Password must be at least 6 characters long.");
    }

    if (!isEqualToOtherValue(password as string, confirmPassword as string)) {
      errors.push("Passwords do not match.");
    }

    if (!isNotEmpty(firstName as string) || !isNotEmpty(lastName as string)) {
      errors.push("First name and last name are required.");
    }

    if (!isNotEmpty(role as string)) {
      errors.push("Role is required.");
    }

    if (!terms) {
      errors.push("You must accept the terms and conditions.");
    }

    if (acquisition.length === 0) {
      errors.push("You must select at least one acquisition channel.");
    }

    if (errors.length > 0) {
      console.error("Validation errors:", errors);
      return {
        errors: errors,
      };
    }
    event.currentTarget.reset();
    return {
      errors: null,
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
