// json2html.js or json2html.mjs
export default function json2html(data) {
    const headers = [...new Set(data.flatMap(Object.keys))];
    let html = `<table data-user="sandragirisaki2004@gmail.com">\n  <thead>\n    <tr>`;
    headers.forEach(header => { html += `<th>${header}</th>`; });
    html += `</tr>\n  </thead>\n  <tbody>`;
    data.forEach(row => {
      html += `\n    <tr>`;
      headers.forEach(header => { html += `<td>${row[header] || ""}</td>`; });
      html += `</tr>`;
    });
    html += `\n  </tbody>\n</table>`;
    return html;
  }
  
  // Sample usage
  const data = [
    { Name: "Alice", Age: 25 },
    { Name: "Bob", Age: 30 },
    { Name: "Charlie", Age: 35, Gender: "M" }
  ];
  
  console.log(json2html(data));
  