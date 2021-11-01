import React, { useState } from "react";
import Input from "../../shared/ui/atoms/input";

const HomePage = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Input value={value} setValue={setValue} />
    </div>
  );
};

export default HomePage;
