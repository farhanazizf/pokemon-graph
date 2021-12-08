import React from "react";
import Spinner from "../../components/loader";
import { MainLayout } from "../../components/main-layout";

const View = React.lazy(() => import("./view"));

const Homepage: React.FC = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<Spinner />}>
        <View />
      </React.Suspense>
    </MainLayout>
  );
};

export default Homepage;
