import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => <SignUp afterSignUpUrl="/new-user" redirectUrl='/new-user' />;

export default SignUpPage;
