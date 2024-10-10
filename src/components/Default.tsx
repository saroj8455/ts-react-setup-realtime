import React from 'react';
import { Button } from 'primereact/button';
export default function Default() {
  return (
    <div className='container'>
      <h1 className='text-center'>Vite + React + Typescript</h1>
      <div className='card flex justify-content-center'>
        <Button label='Check' icon='pi pi-check' />
      </div>
      <p className='mb-1'>Click on the Vite and React logos to learn more</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad
        voluptatibus culpa numquam? Nulla non fugiat nam molestiae, perspiciatis
        quod obcaecati perferendis aspernatur qui, assumenda quam suscipit illum
        quae ipsa?
      </p>
    </div>
  );
}
