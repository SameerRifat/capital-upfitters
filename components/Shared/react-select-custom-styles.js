export const generateCustomStyles = (width) => ({
    control: (provided, state) => ({
      ...provided,
      width: width,
      height: 'auto',
      backgroundColor: 'transparent',
      borderRadius: 'var(--radius-sm)',
      paddingLeft: '5px',
      boxShadow: state.isFocused ? 'none' : provided.boxShadow,
      // borderColor: state.isFocused ? 'var(--primary-color2)' : provided.borderColor,
      color: 'var(--white)',
      padding: '0',
      border: '1px solid transparent',
      borderColor: state.isFocused ? 'var(--primary-color2)' : 'none',
      cursor: 'pointer'
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
      // width: 'fit-content',
      width: '100%',
      fontSize: '12px',
      zIndex: '20',
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
    input: (provided) => ({
      ...provided,
      color: 'var(--white)', // Change 'red' to the color you want for the input text
    }),
  });
  