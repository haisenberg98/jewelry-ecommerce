import React from 'react';

function Button({ variant, children, onClick }) {
  // Determine the button style based on the variant prop
  let buttonStyle = 'border-[1.5px] py-2 transition-all duration-150';

  switch (variant) {
    case 'primary':
      buttonStyle +=
        ' border-customDark text-customDark hover:text-customWhite hover:bg-customDark';
      break;
    case 'secondary':
      buttonStyle += ' bg-gray-200 text-gray-800 hover:bg-gray-100';
      break;
    case 'outline':
      buttonStyle += ' border-blue-500 text-blue-500 hover:bg-blue-100';
      break;
    // Add more variants as needed
    default:
      buttonStyle +=
        ' border-customDark text-customDark hover:text-customWhite hover:bg-customDark';
      break;
  }

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
