import React from "react";
import { MainLayout } from "../../components/main-layout";
import Spinner from "../../components/loader";

const View = React.lazy(() => import("./view"));

const MyPokemon: React.FC = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<Spinner />}>
        <View />
      </React.Suspense>
    </MainLayout>
  );
};

export default MyPokemon;
