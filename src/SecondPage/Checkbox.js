import React from 'react';


function AnimatedCheckbox() {
  const [checked, setChecked] = React.useState(false);

  const handleMouseEnter = () => {
    setChecked(true);
  };

  const handleMouseLeave = () => {
    setChecked(false);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      
    </label>
  );
}

export default AnimatedCheckbox;