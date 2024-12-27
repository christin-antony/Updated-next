
import localFont from 'next/font/local'; 
import "./globals.css";
import 'aos/dist/aos.css';
import AOSInit from './components/AOSInit';

const latef = localFont({
  src: [
    {
      path: '../public/fonts/LateefRegOT.woff',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-latef',
});

const quich = localFont({
  src: [
    {
      path: '../public/fonts/Fontspring-DEMO-quichesans-medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Fontspring-DEMO-quichesans-bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Fontspring-DEMO-quichesans-light.woff',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-quich',
});

const latefLight = localFont({
  src: [
    {
      path: '../public/fonts/lateef-cufonfonts-webfont/Lateef-Light.woff',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-latef-light',
});



export const metadata = {
  title: "task-1",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${latef.variable} ${quich.variable} ${latefLight.variable}`}>
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
