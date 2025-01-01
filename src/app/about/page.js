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
    <h1 className="name">about</h1>
    <span style={{ 
      fontSize: '32px',  // Same as .name class
      color: 'var(--mylightgrey)',
      fontWeight: 'normal',
      lineHeight: '.9',  // Same as .name class
      marginBottom: "5px"
    }}>2005</span>
  </div>
      <table className="table-horizontal-only">
  <thead>
  </thead>
  <tbody>
    <tr>
      <td>
        <h2>ME</h2>
      </td>
      <td>
      <p style={{marginBottom:"20px"}}>Hi! I'm Asya, a sophomore at Yale studying <b>Computing and the Arts</b> (CS + Graphic Design).
      </p>
      <p>I'm originally from CT, so New Haven has always been the place where I was able to pursue art. As a kid, it was in the form of piano, woodworking and meticulously crafted Google Slides. Today, it's design and code.
      </p>
      </td>
    </tr>
      
  </tbody>
</table>
    </div>
  );
}
