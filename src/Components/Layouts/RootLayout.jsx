import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LoadingSpinner from "../LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div>
      <Navbar />
      {/* <main className="min-h-[calc(100vh-285px)]">
        <Outlet/>
      </main> */}
      {/* loading er jonno alada vabe dite hobe */}
      {navigation?.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <main className="min-h-[calc(100vh-285px)]">
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default RootLayout;
