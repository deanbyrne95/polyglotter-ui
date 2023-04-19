import React from "react";

import Logo from "../assets/polyglotter10x.png";

const Login = () => {
  return (
    <section className="h-screen">
      <div className="pt-12 flex flex-wrap justify-center items-center">
        <div className="sm:w-1/2">
          <div className="flex justify-center">
            <img src={Logo} className="sm:w-full w-[50%]" alt="Polyglotter Logo" />
          </div>
        </div>
        <div className="sm:w-1/4 lg:w-1/3 w-1/2 mb-12">
          <form>
          <div className="mb-3">
                <label for="email" className="text-sm text-secondary dark:text-white font-bold">Email</label>
                <input type="text" id="email" placeholder="coolExplorer@email.com" className="text-primary mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-primary" />
            </div>
            <div className="mb-3">
                <label for="password" className="text-sm text-secondary dark:text-white font-bold">Password</label>
                <input type="password" id="password" placeholder="XXRockstar89!" className="text-primary mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-primary" />
            </div>
            <button className="w-full mt-4 py-3 px-4 bg-transparent text-tertiary font-semibold border border-secondary rounded-xl hover:bg-secondary hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
