import React from 'react';

type Props = {};

function Intro({}: Props) {
  return (
    <div className="relative h-[100vh] top-20">
      <div className="grid grid-cols-2 mx-auto max-w-7xl">
        <div className="border boder-white h-80 w-80">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum asperiores, reprehenderit nisi numquam quos quidem dolore
            corrupti esse? Id ad totam ratione quas voluptatibus itaque illum
            similique laborum maxime.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum asperiores, reprehenderit nisi numquam quos quidem dolore
            corrupti esse? Id ad totam ratione quas voluptatibus itaque illum
            similique laborum maxime.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Intro;
