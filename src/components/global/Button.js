import React from 'react';

function Button({ variant, children, onClick }) {
  // Determine the button style based on the variant prop
  let buttonStyle = ' border-[1.5px] transition-all duration-200';

  switch (variant) {
    case 'primary':
      buttonStyle +=
        '  border-customDark text-customDark hover:text-customWhite hover:bg-customDark py-2';
      break;
    case 'secondary':
      buttonStyle += '';
      break;
    // Add more variants as needed
    default:
      buttonStyle +=
        ' border-customDark text-customDark hover:text-customWhite hover:bg-customDark py-2';
      break;
  }

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
