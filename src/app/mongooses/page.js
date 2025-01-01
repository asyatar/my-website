export default function about() {
  return (
    <div className="body-container">
      <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end',
    width: '100%',
    maxWidth: 'calc(100%)',  // Matches the right column width of table-horizontal-only
   
  }}>
    <h1 className="name">invasive<br />mongoose poster</h1>
    <span style={{ 
      fontSize: '32px',  // Same as .name class
      color: 'var(--mylightgrey)',
      fontWeight: 'normal',
      lineHeight: '.9',  // Same as .name class
      marginBottom: "5px"
    }}>2024</span>
  </div>
      
      <table className="table-horizontal-only">
        <tbody>
          <tr style={{ borderBottom: 'none' }}>
            <td style={{ padding: '0' }}></td>
            <td style={{ padding: '0' }}>
            <p className="mb-5" style={{marginTop:"25px", marginBottom: "40px"}}>
            A poster about the invasive mongoose in Hawaii and the authorization of running them over by law.
              </p>
              <img src="mongooses.jpg"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}