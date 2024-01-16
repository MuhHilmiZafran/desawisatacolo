import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import InputField from "../../components/InputField";

const Register = () => {
  const navigate = useNavigate();

  const onRegister = () => {
    return navigate("/");
  };

  return (
    <>
      <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dzisbnmi0/image/upload/v1700668516/mount_rhavkt.png)] text-center items-center justify-center relative flex">
        <div className="absolute w-full sm:w-2/3 h-2/3 sm:h-screen bottom-0 px-24 md:px-48 py-8 flex sm:left-0 sm:rounded-l-lg bg-white">
          <div className="flex flex-col text-left mt-12 md:mt-0 w-full">
            <div className="mb-5">
              <NavLink to="/">
                <ArrowBack />
              </NavLink>
            </div>
            <h2 className="text-3xl mb-3 sm:text-xl">Daftar Akun</h2>
            <form onSubmit={onRegister}>
              <InputField
                name="nama"
                label="Nama Lengkap"
                type="text"
                placeholder="johndoe"
                // errors={errors}
                // register={register}
              />
              <InputField
                name="email"
                label="Email"
                type="email"
                placeholder="johndoe@example.com"
                // errors={errors}
                // register={register}
              />
              <InputField
                name="nomor"
                label="Nomor Handphone"
                type="number"
                placeholder="08xxxxxxxxxx"
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
                  Daftar
                </button>
              </div>
            </form>
            <div>
              <p>Sudah punya akun?</p>
            </div>
            <div>
              <NavLink to={"/login"}>Login</NavLink>
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
    </>
  );
};

export default Register;
