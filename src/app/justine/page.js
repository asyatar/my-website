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
    <h1 className="name">justine</h1>
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
            <img src="justine.png" style={{marginTop: "30px", marginBottom:"30px"}}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}