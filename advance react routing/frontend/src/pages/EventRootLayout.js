import EventNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
const EventRootLayout = () => {
  return (
    <>
      <div>
        <EventNavigation />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventRootLayout;
