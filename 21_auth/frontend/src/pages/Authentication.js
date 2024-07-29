import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  const data = await request.formData();
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode.!" }, { status: 422 });
  }
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  // send to backend authentication server ...
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could nost authenticate user." }, { status: 500 });
  }

  // magnage the token

  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);

  return redirect("/");
};
