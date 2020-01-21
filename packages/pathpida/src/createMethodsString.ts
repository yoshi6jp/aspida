export default (indent: string, importName: string, newUrl: string, trailingSlash: boolean) => {
  return `${indent}  $get: (${importName ? `query: ${importName}` : ''}) => \`\${prefix}${newUrl}${
    trailingSlash ? '/' : ''
  }${importName ? `?\${dataToURLString(query)}` : ''}\``
}
