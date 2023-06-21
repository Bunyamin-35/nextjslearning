
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>Header from root</div>
        <div>{children}</div>
        <div>Footer from root</div>
      </body>
    </html>
  )
}
