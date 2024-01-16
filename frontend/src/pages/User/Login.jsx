import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import InputField from "../../components/InputField";

const Login = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    return navigate("/");
  };

  return (
    <>
      <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dzisbnmi0/image/upload/v1700668516/mount_rhavkt.png)] text-center items-center justify-center relative flex">
        <div className="absolute w-full sm:w-2/3 h-4/5 sm:h-screen bottom-0 px-24 xl:px-48 flex sm:left-0 sm:rounded-l-lg bg-white">
          <div className="flex flex-col text-left justify-center w-full">
            <div className="mb-12">
              <NavLink to="/">
                <ArrowBack />
              </NavLink>
            </div>
            <h2 className="text-3xl mb-3 sm:text-xl">Login</h2>
            <form onSubmit={onLogin}>
              <InputField
                name="username"
                label="Username"
                type="text"
                placeholder="johndoe"
                // errors={errors}
                // register={register}
              />
              <InputField
                name="password"
                label="Password"
                type="password"
                placeholder="it's secret"
                // errors={errors}
                // register={register}
              />
              <div className="w-full">
                <button
                  type="submit"
                  className="box-border w-full min-h-[30px] bg-cyan-600 rounded-[3px] text-white text-xs transition"
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              <p>Belum punya akun?</p>
            </div>
            <div>
              <NavLink to={"/registrasi"}>Daftar Akun</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
