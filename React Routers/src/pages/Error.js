import MainNavigation from "../components/MainNavigation";

const Error = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error 404: Page Not Found</h1>
        <p>The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      </main>
    </>
  );
};

export default Error;
