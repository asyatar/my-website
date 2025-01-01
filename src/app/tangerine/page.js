export default function about() {
  return (
    <div className="body-container">
     <div style={{ height: '33px' }} />
       <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end',
    width: '100%',
    maxWidth: 'calc(100%)',  // Matches the right column width of table-horizontal-only
    
  }}>
    <h1 className="name">tangerine font</h1>
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
                Trying to build organic letterforms out of a small pixel grid.
              </p>
              <img src="tangerinealphabet.png" style={{marginBottom:"30px"}}/>
              <img src="tangerinewords.png" style={{marginBottom:"30px"}}/>
              <img src="tangerineviruses.jpg"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}