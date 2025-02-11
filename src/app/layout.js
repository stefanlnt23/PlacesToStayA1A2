import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Hotel Booking App',
  description: 'Book your perfect stay',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}