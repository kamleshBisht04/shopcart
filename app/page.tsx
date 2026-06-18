import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <Container className=" text-xl">
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit excepturi itaque
        laboriosam tempora tempore veritatis nobis explicabo ex minus labore hic omnis corporis unde
        rerum sunt, facere dicta perspiciatis animi voluptatem saepe ut reiciendis? Iure libero
        explicabo repudiandae laborum quam, quod ipsam laudantium obcaecati modi cupiditate est
        itaque nostrum.
      </p>

      <Button>check out</Button>
    </Container>
  );
};

export default page;
