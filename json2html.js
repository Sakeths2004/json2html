export default function json2html(data) {
    // Get unique headers from data keys
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Start table with data-user attribute
    let html = `<table data-user="sandragirisaki2004@gmail.com">\n  <thead>\n    <tr>`;
  
    // Add headers to the table
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += `</tr>\n  </thead>\n  <tbody>`;
  
    // Add rows to the table
    data.forEach(row => {
      html += `\n    <tr>`;
      headers.forEach(header => {
        html += `<td>${row[header] || ""}</td>`;
      });
      html += `</tr>`;
    });
  
    // Close table
    html += `\n  </tbody>\n</table>`;
    
    return html;
  }
  