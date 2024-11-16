import "./globals.css";

// css stylesheet
// import "../style/css/vendor.css";
import "../style/css/bootstrap.min.css";
import "../style/css/google-fonts.css";
import "../style/css/custom.css";
import "../style/css/theme.minc619.css?v=1.0";
import "../style/css/daterangepicker.css";
import "../style/css/style.css";
import "../style/css/toastr.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
      <body>{children}</body>
    </html>
  );
}
