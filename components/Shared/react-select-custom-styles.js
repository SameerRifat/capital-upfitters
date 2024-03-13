const generateCustomStyles = (width) => ({
    control: (provided, state) => ({
      ...provided,
      width: width,
      height: 'auto',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      paddingLeft: '5px',
      boxShadow: state.isFocused ? 'none' : provided.boxShadow,
      borderColor: state.isFocused ? 'var(--primary-color2)' : provided.borderColor,
      color: 'var(--white)',
      padding: '0'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'var(--white)',
      padding: '0',
      '&:hover': {
        color: 'rgba(255,255,255,0.8)'
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--white)',
      fontSize: '12px',
      marginLeft: '0',
      padding: '0 ',
      marginRight: 'auto'
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#272727',
      borderRadius: 'var(--radius-sm)',
      marginTop: 0,
      color: 'var(--text)',
      width: 'fit-content',
      fontSize: '12px'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'var(--black)' : state.isFocused ? '#1d1d1d' : '#272727',
      color: state.isSelected && 'var(--white)',
      textAlign: 'left',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#1d1d1d',
      },
    }),
  });
  
  export const customStyles = generateCustomStyles('95px');
  export const customStyles2 = generateCustomStyles('100px');
  export const customStyles3 = generateCustomStyles('180px');
  