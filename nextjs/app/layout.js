export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>Menu principal</div> {/* Move o menu para o layout */}
        {children} {/* Renderiza o conteúdo da página */}
      </body>
    </html>
  );
}
