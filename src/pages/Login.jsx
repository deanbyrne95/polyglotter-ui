import React from "react";

import Logo from "../assets/polyglotter10x.png";

const Login = () => {
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src={Logo} class="w-full" alt="Polyglotter Logo" />
          </div>
        </div>
        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form></form>
        </div>
      </div>
    </section>
  );
};

export default Login;
