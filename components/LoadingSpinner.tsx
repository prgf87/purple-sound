import React from "react";
import { TailSpin } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <div className="z-20 flex w-full items-center justify-center py-0">
      <TailSpin
        height="50"
        width="50"
        radius={2}
        color="#f1f5f9"
        ariaLabel="tail-spin-loading"
        visible={true}
      />
    </div>
  );
}

export default LoadingSpinner;
