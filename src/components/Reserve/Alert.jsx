const Alert = ({ message, type }) => {
  const alertStyles = {
    success: {
      backgroundColor: "lightgreen",
      color: "darkgreen",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid darkgreen",
      marginBottom: "10px",
    },
    error: {
      backgroundColor: "lightcoral",
      color: "darkred",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid darkred",
      marginBottom: "10px",
    },
  };

  return <div style={alertStyles[type]}>{message}</div>;
};

export { Alert };
